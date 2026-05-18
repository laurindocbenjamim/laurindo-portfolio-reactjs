import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, CheckCircle, Package } from "lucide-react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 0,
    title: 'Visão Geral do Portfólio',
    overview: 'Este portfólio demonstra a experiência em "engenharia de dados" através de projetos práticos que abordam desafios comuns no ciclo de vida dos dados. Os projetos incluem o desenvolvimento de pipelines automatizados, sincronização entre bases de dados, e a utilização de ferramentas de big data como "Hadoop" e "Spark". Cada projeto foi concebido para resolver um problema específico, desde a orquestração de tarefas com o Apache Airflow até a monitorização e depuração de aplicações distribuídas.'
  },
  {
    id: 1,
    title: 'Senior Software Developer',
    scenario: 'Liderança no desenvolvimento de um sistema de gestão de arquivos para uma instituição de ensino, abrangendo desde a conceção arquitetural até a implantação e a garantia de segurança.',
    objectives: ['Desenvolver uma aplicação web robusta para gestão de arquivos.', 'Implementar um sistema de autenticação seguro (OAuth2 ou JWT).', 'Garantir a integridade e segurança dos dados e arquivos.', 'Configurar o ambiente de deployment para um servidor local.'],
    challenge: 'Criar um sistema de gestão de arquivos que fosse seguro, escalável e de fácil acesso para os utilizadores, enquanto se mantinham altos padrões de segurança e integridade de dados. O maior desafio foi garantir a segurança dos acessos e o armazenamento de arquivos em um ambiente local com múltiplos utilizadores e diferentes níveis de permissão.',
    solution: 'A solução foi desenvolver um sistema utilizando "Java com Spring Boot" para o backend, adotando o padrão "MVC (Model-View-Controller)" para uma arquitetura organizada. O sistema de segurança foi construído com "JSON Web Tokens (JWT)" para a autenticação, garantindo que apenas utilizadores autorizados pudessem aceder aos ficheiros. A aplicação foi implementada em um servidor local com base de dados "MySQL" ou "PostgreSQL" para o armazenamento de metadados, enquanto os arquivos foram guardados no sistema de ficheiros do servidor. Além disso, foi construído um sistema de API para acesso externo via nuvem, que exigia uma comunicação segura e autenticada entre os sistemas.',
    tools: ['Java 10', 'Spring Boot MVC', 'Bootstrap', 'Javascript', 'JQuery', 'RESTful APIs', 'JWT'],
    why: 'A escolha por "Java e Spring Boot" deveu-se à sua robustez, maturidade e ao ecossistema de segurança (Spring Security). O padrão "MVC" permitiu uma separação clara de responsabilidades, facilitando a manutenção. Para o frontend, "Bootstrap, Javascript e JQuery" foram escolhidos por serem leves e eficientes para a criação de uma interface de utilizador responsiva, sem a necessidade de um framework mais pesado como Angular ou React, que seria um exagero para os requisitos do projeto. A utilização de "JWT" para a autenticação em vez de sessões tradicionais garantiu uma solução mais escalável e sem estado, ideal para APIs.'
  },
  {
    id: 2,
    title: 'Pipeline de Análise de Logs',
    scenario: 'Criação de um pipeline automatizado para processar logs de servidor web, extrair informações cruciais e armazená-las de forma estruturada para análise posterior.',
    objectives: ['Processar logs em tempo real.', 'Extrair métricas de tráfego e erro.', 'Automatizar o fluxo de dados de forma confiável.'],
    challenge: 'Garantir a coleta e o processamento de grandes volumes de dados de log de forma escalável e tolerante a falhas, sem a necessidade de intervenção manual diária.',
    solution: 'Orquestração de um pipeline ETL (Extrair, Transformar, Carregar) usando Apache Airflow. As tarefas de extração, transformação e carregamento foram encadeadas em uma DAG (Grafo Acíclico Dirigido), garantindo a automação e a execução correta, mesmo em caso de falhas parciais.',
    tools: ['Apache Airflow', 'Bash'],
    why: 'O "Apache Airflow" foi a escolha ideal para este projeto por sua capacidade de orquestração. Diferentemente de scripts simples que poderiam falhar sem notificação, o Airflow permite monitorizar o estado de cada tarefa, agendar execuções e configurar `retries` automáticos, garantindo a robustez do pipeline. O uso de "Bash Operators" simplificou as tarefas de processamento de logs, já que muitas operações de manipulação de texto são nativas em ambientes Unix.'
  },
  {
    id: 3,
    title: 'Sincronização de Data Warehouses',
    scenario: 'Sincronizar dados entre um ambiente de teste (MySQL) e o de produção (IBM DB2/PostgreSQL) para que a equipa de negócios tenha acesso a informações atualizadas e consistentes, sem impacto na performance do sistema principal.',
    objectives: ['Manter a integridade e consistência dos dados.', 'Minimizar a latência na sincronização.', 'Reduzir a carga no banco de dados de produção.'],
    challenge: 'Manter a sincronização de dados entre bases de dados com diferentes arquiteturas e volumes massivos de forma eficiente, evitando a duplicação de registos e minimizando o tempo de inatividade.',
    solution: 'Desenvolvimento de um script Python para realizar uma carga incremental de dados. O script compara a última data de atualização entre os ambientes e transfere apenas os novos registos, otimizando o processo e reduzindo a carga computacional.',
    tools: ['Python', 'MySQL', 'IBM DB2', 'PostgreSQL'],
    why: 'A escolha de "Python" para este projeto foi estratégica devido à sua vasta biblioteca de conectores de base de dados e à sua legibilidade. Em vez de usar ferramentas de ETL complexas, um script simples em Python ofereceu a flexibilidade necessária para conectar a diferentes tipos de bases de dados (MySQL, DB2, PostgreSQL) e implementar a lógica específica de carga incremental, tornando a solução leve e personalizável.'
  },
  {
    id: 4,
    title: 'Criação e Consulta de Tabelas no Hive',
    scenario: 'Simular um ambiente de análise de Big Data para permitir que a equipa de análise de negócios execute consultas complexas de forma simples e familiar (usando SQL), sem a necessidade de programar em Java ou Python.',
    objectives: ['Criar um ambiente de análise acessível.', 'Executar consultas SQL diretamente sobre dados massivos.', 'Fornecer uma camada de abstração para o sistema de ficheiros distribuído.'],
    challenge: 'Permitir a análise de dados massivos distribuídos (HDFS) por uma equipa não técnica, superando a complexidade do ambiente de Big Data.',
    solution: 'Criação de uma tabela externa no Hive, que atua como uma camada de abstração sobre os dados armazenados no HDFS. Isso permitiu que a equipa usasse SQL para consultar e analisar dados de forma intuitiva, sem se preocupar com a localização física dos ficheiros.',
    tools: ['Apache Hive', 'Hadoop (HDFS)', 'SQL'],
    why: 'O "Apache Hive" foi escolhido para este cenário por ser a melhor solução para transformar um sistema de ficheiros distribuído, como o "HDFS", em um banco de dados relacional. Ele permite que analistas de negócios, que já estão familiarizados com "SQL", possam interagir com grandes volumes de dados sem ter que aprender tecnologias complexas como MapReduce, democratizando o acesso aos dados da empresa.'
  },
  {
    id: 5,
    title: 'Configuração de Cluster Hadoop',
    scenario: 'Montagem de um ambiente de desenvolvimento e teste para processamento distribuído, permitindo que a equipa de engenharia de dados experimente e valide novos pipelines em um ambiente isolado e replicável.',
    objectives: ['Criar um cluster Hadoop de forma rápida.', 'Reproduzir um ambiente de produção em escala reduzida.', 'Simplificar o processo de desenvolvimento e teste.'],
    challenge: 'Configurar um ambiente de cluster Hadoop completo e funcional de forma rápida e eficiente, sem a necessidade de infraestrutura de hardware dedicada.',
    solution: 'Utilização de Docker para criar um cluster Hadoop local com todos os componentes necessários. Isso proporcionou um ambiente de testes portátil e consistente, facilitando a colaboração e a rápida validação de soluções.',
    tools: ['Hadoop (HDFS)', 'Docker'],
    why: 'A decisão de usar "Docker" foi motivada pela necessidade de criar um ambiente de desenvolvimento e testes consistente. Em vez de instalar e configurar manualmente todos os componentes do "Hadoop", o Docker permite encapsular o ambiente em uma imagem, garantindo que a configuração seja idêntica em todas as máquinas. Isso eliminou problemas de compatibilidade e acelerou o processo de `setup`.'
  },
  {
    id: 6,
    title: 'Monitorização e Debug de Aplicações Spark',
    scenario: 'Diagnosticar e otimizar a performance de uma aplicação de processamento de dados distribuídos em Spark, identificando gargalos e corrigindo erros de execução que causam falhas no pipeline.',
    objectives: ['Reduzir o tempo de processamento.', 'Corrigir erros de execução.', 'Otimizar o uso de recursos computacionais.'],
    challenge: 'Identificar a causa de falhas e problemas de desempenho em um ambiente de processamento distribuído, onde as tarefas são executadas em múltiplos nós de forma paralela e assíncrona.',
    solution: 'Utilização da interface de utilizador web do Spark para monitorizar o progresso das tarefas e visualizar os logs de erro. Essa abordagem permitiu identificar com precisão as causas das falhas, como `out of memory` ou `tasks` que demoraram a executar, possibilitando a otimização do código e a correção dos problemas.',
    tools: ['Apache Spark', 'PySpark', 'SQL'],
    why: 'A escolha do "Apache Spark" deveu-se à sua capacidade de processamento em memória e à sua UI web integrada. Ao invés de frameworks mais antigos como o MapReduce, o Spark oferece uma ferramenta de monitorização visual que facilita o `debug` de aplicações distribuídas. A interface web do Spark permite visualizar o fluxo de execução das tarefas, o uso de recursos e os `stack traces` de erros, acelerando o diagnóstico e a otimização de forma significativa.'
  },
  {
    id: 7,
    title: 'ASun Browser AI Agent',
    scenario: 'Desenvolvimento de um sistema de navegador autónomo sofisticado, capaz de navegar em ambientes web complexos para automação e avaliação de segurança.',
    objectives: ['Automatizar tarefas repetitivas de preenchimento de formulários web.', 'Realizar auditorias de segurança automatizadas (pentesting) em interfaces web.', 'Orquestrar eficientemente múltiplos agentes de IA.'],
    challenge: 'Navegar em estruturas DOM dinâmicas e lidar com protocolos de segurança mantendo alta velocidade e fiabilidade em diferentes ambientes web.',
    solution: 'Implementação de uma arquitetura de microserviços utilizando Python/FastAPI para a orquestração de agentes. Desenvolvimento de módulos específicos: um para automação de navegação DOM e outro especializado na identificação de vulnerabilidades de segurança em frontends e backends.',
    tools: ['Python', 'FastAPI', 'React', 'Agentic AI', 'LLMs', 'Render'],
    why: 'O FastAPI forneceu a performance necessária para a coordenação de agentes em tempo real, enquanto o React ofereceu um dashboard de controlo responsivo. O uso de microserviços permite que os agentes especializados sejam escalados de forma independente.'
  },
  {
    id: 8,
    title: 'JDM Mock Server',
    scenario: 'Criação de uma ferramenta de desenvolvedor para simular ambientes de backend, permitindo que as equipas de frontend construam e testem sem uma API de produção ativa.',
    objectives: ['Simular respostas complexas de APIs REST.', 'Fornecer suporte multi-tenant para ambientes isolados.', 'Implementar um motor de base de dados leve.'],
    challenge: 'Projetar um motor que suporte rotas personalizadas e relações semelhantes a tabelas (como o SQL.js) dentro de um runtime Node.js.',
    solution: 'Construção de um backend de alta performance utilizando Express.js. Projeto de um motor de base de dados modular que fornece a cada utilizador um ambiente isolado baseado em JSON para simular relações de dados.',
    tools: ['Node.js', 'Express', 'JSON', 'Mocking Engine', 'Render'],
    why: 'O Node.js e o Express são padrões da indústria para o desenvolvimento de APIs, tornando o servidor mock altamente compatível com fluxos de trabalho de frontend modernos. O motor baseado em JSON permite iterações rápidas sem o overhead de um RDBMS completo.'
  },
  {
    id: 9,
    title: 'Radar Sentinel (Discord Bot)',
    scenario: 'Um bot de inteligência financeira para o Discord que monitoriza mercados globais, identifica tendências e fornece análise algorítmica em tempo real.',
    objectives: ['Análise de sentimento em tempo real de mercados de cripto e ações.', 'Integração com Discord para alertas instantâneos.', 'Processamento de dados do Yahoo Finance com latência mínima (12.25s).'],
    challenge: 'Correlacionar indicadores financeiros díspares (NASDAQ, DXY, Bitcoin, fluxos de Ouro) em insights de mercado acionáveis em poucos segundos.',
    solution: 'Desenvolvimento de uma ferramenta baseada em IA utilizando Python e APSchedule para automação de tarefas. Integração de webhooks do Discord para relatórios em tempo real de radares de setor (ex: foco em IA Agêntica nos EUA) e tendências de liquidez.',
    tools: ['Python', 'APSchedule', 'Discord API', 'Yahoo Finance', 'LLM Fine-tuning'],
    why: 'O ecossistema financeiro do Python e a acessibilidade do Discord tornam-no a plataforma perfeita para entregar insights de dados complexos a traders e instituições de forma rápida.'
  },
  {
    id: 10,
    title: 'SpectraLab',
    scenario: 'Desenvolvimento de uma plataforma de processamento quimiométrico de alto desempenho para análise de espectroscopia, permitindo o upload e análise em tempo real de dados complexos de química analítica.',
    objectives: ['Processar ficheiros de espectroscopia em formatos .csv e .sp.', 'Implementar algoritmos de pré-processamento de sinal em tempo real.', 'Integrar visualizações interativas para PCA (Análise de Componentes Principais) e PLS-DA.'],
    challenge: 'Lidar com grandes matrizes de dados espectrais e executar cálculos estatísticos complexos de forma modular e performante dentro de um navegador e backend sincronizados.',
    solution: 'Arquitetura monolítica modular construída com Python para o processamento de dados e React para a interface. Integração de bibliotecas especializadas para execução de algoritmos RAMAN e PCA, fornecendo feedback visual instantâneo através de gráficos d3.js interactivos.',
    tools: ['Python', 'React', 'Chemometrics', 'PCA', 'PLS-DA', 'd3.js', 'Modular Monolith'],
    why: 'A escolha por uma arquitetura monolítica modular permitiu um desenvolvimento ágil sem a complexidade de rede de microserviços, garantindo que o processamento intensivo de dados espectrais fosse realizado com a menor latência possível.'
  }
];

export default function Showcases() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    if (currentSlideIndex < projectsData.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const project = projectsData[currentSlideIndex];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full bg-neutral-900 rounded-3xl border border-neutral-800 shadow-2xl p-6 md:p-10 flex flex-col items-center">
        
        <div className="w-full mb-8 flex justify-between items-center border-b border-neutral-800 pb-4">
             <Link to="/" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Portfolio
             </Link>
             <h1 className="text-xl font-bold text-white tracking-tight">Project Showcases</h1>
             <div className="w-24"></div> {/* Spacer for balance */}
        </div>

        <div className="w-full flex-grow overflow-hidden relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h2 className="text-3xl font-bold text-center text-white mb-8">{project.title}</h2>
              
              {project.overview ? (
                <div className="text-lg text-neutral-400 leading-relaxed text-center max-w-2xl mx-auto">
                  {project.overview}
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-2 flex items-center gap-2">
                                <Package className="w-4 h-4" /> Scenario
                            </h3>
                            <p className="text-neutral-400 leading-relaxed">{project.scenario}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-2">Objectives</h3>
                            <ul className="space-y-2">
                                {project.objectives?.map((obj, i) => (
                                    <li key={i} className="flex gap-2 text-neutral-400 text-sm">
                                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-2">Technical Insight</h3>
                            <div className="bg-neutral-800/50 rounded-2xl p-4 border border-neutral-800">
                                <p className="text-neutral-300 text-sm mb-3"><strong>Challenge:</strong> {project.challenge}</p>
                                <p className="text-neutral-300 text-sm"><strong>Solution:</strong> {project.solution}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-2">Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tools?.map(tool => (
                                    <span key={tool} className="bg-neutral-800 text-neutral-300 text-[10px] font-mono font-bold px-3 py-1 rounded-lg border border-neutral-700">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-neutral-800">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Why these technologies?</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed italic">{project.why}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center mt-12 gap-6">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className={`flex items-center gap-2 bg-neutral-800 text-white font-semibold py-3 px-6 rounded-2xl shadow-xl transition-all ${
              currentSlideIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-neutral-700 hover:scale-105 active:scale-95"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white tabular-nums">
              {currentSlideIndex + 1} <span className="text-neutral-600 font-normal">/</span> {projectsData.length}
            </span>
            <div className="flex gap-1 mt-2">
                {projectsData.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-300 ${i === currentSlideIndex ? 'w-4 bg-brand-primary' : 'w-1 bg-neutral-800'}`} 
                    />
                ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === projectsData.length - 1}
            className={`flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-2xl shadow-xl transition-all ${
              currentSlideIndex === projectsData.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-neutral-200 hover:scale-105 active:scale-95"
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
