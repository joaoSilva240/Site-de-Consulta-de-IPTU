import React from 'react';
import { CheckSquare } from 'lucide-react';

export default function Script() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Script de Orientação</h1>
        <p style={styles.subtitle}>
          Material de apoio para atendimento ao cidadão sobre atualização cadastral e revisão de valores do IPTU.
        </p>
      </div>

      <div style={styles.gradientBar}></div>

      <div style={styles.contentContainer}>
        {/* Main Card */}
        <div style={styles.card}>
          <div style={styles.internalHeader}>
            <div style={styles.internalLabel}>DOCUMENTO INTERNO</div>
            <h2 style={styles.internalTitle}>
              SCRIPT PADRÃO DE<br />
              ORIENTAÇÃO AO CIDADÃO
            </h2>
          </div>

          {/* Section 1: TEXTO DE APOIO */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionNumber}>1</div>
              <h3 style={styles.sectionTitle}>TEXTO DE APOIO</h3>
            </div>

            <div style={styles.textBlock}>
              <p>A Prefeitura compreende que mudanças no IPTU geram dúvidas e preocupação, por isso orienta todos os servidores e gestores a explicarem esse tema com clareza, calma e transparência.</p>

              <p>É importante esclarecer que o que foi realizado não foi um aumento decidido por vontade da Prefeitura, mas sim um conjunto de atualizações obrigatórias no cadastro imobiliário do município, incluindo o Valor Venal dos imóveis, que é a base de cálculo do IPTU e que estava sem atualização geral desde 1989, ficando muito abaixo da realidade atual.</p>

              <p>Esse movimento está inserido em um contexto maior de planejamento, sustentabilidade e responsabilidade institucional, preparando a cidade para o futuro e para a nova lógica tributária nacional.</p>

              <p>Esse processo teve início a partir de alterações na legislação tributária em âmbito federal, que passaram a exigir que os municípios mantivessem seus cadastros e valores mais próximos da realidade do mercado imobiliário.</p>

              <p>Na sequência, o Governo do Estado esteve em Boituva, assim como em diversos outros municípios, realizando um estudo mercadológico dos imóveis, com levantamento de valores praticados no mercado em diferentes regiões da cidade. Esse estudo técnico serviu como base e referência para os trabalhos realizados no município.</p>

              <p>Diante dessas mudanças legais, dos estudos técnicos realizados e também de cobranças e apontamentos do Tribunal de Contas, especialmente pelo longo período em que os valores estavam sem atualização, a Prefeitura teve a obrigação legal de revisar e atualizar o cadastro imobiliário, não se tratando de uma decisão política opcional, mas de um dever institucional.</p>

              <p>Por isso, a atualização deve ser compreendida como parte de um processo de amadurecimento da cidade, e não como uma ruptura ou escolha isolada da gestão.</p>

              <p>Além da atualização do Valor Venal dos terrenos, foi realizada uma revisão no cálculo do Valor Venal das construções. Existia uma lei municipal antiga que permitia a depreciação automática do valor das edificações ao longo do tempo, gerando descontos permanentes no imposto, mesmo quando o imóvel se mantinha em bom estado. Essa lei foi revogada, e os imóveis que se beneficiavam desse mecanismo tiveram seus valores de construção atualizados para patamares atuais.</p>

              <p>Outro ponto importante foi a atualização da legislação de isenções fiscais do município, tornando a lei mais justa e focada em quem realmente precisa do benefício, como moradores de Zonas de Interesse Social (ZEIS) e aposentados que possuem um único imóvel e residem nele, entre outros critérios sociais.</p>

              <p>Esse aspecto reforça que a atualização não trata apenas de justiça fiscal, mas também de justiça social, protegendo quem tem menor capacidade contributiva.</p>

              <p>Para a definição dos novos valores, foram considerados valores de mercado, porém de forma <strong>criteriosa e responsável</strong>. Em muitos casos, os valores atualizados permaneceram abaixo dos valores praticados no mercado imobiliário, justamente para evitar distorções e garantir uma transição equilibrada.</p>

              <p>Há base técnica e quantitativa para afirmar que a maior parte dos imóveis foi contemplada de forma benéfica, reforçando o cuidado da gestão em não aplicar valores máximos, mas sim valores ponderados.</p>

              <p>Todo o trabalho foi conduzido por um Grupo de Trabalho, com participação de diversos setores técnicos da Prefeitura, além do CRECI e de representantes da sociedade civil, assegurando critérios técnicos, legais e institucionais.</p>

              <p>Cada imóvel possui características próprias e, por isso, a análise é sempre individual. O cidadão pode consultar os valores anteriores e os valores atualizados, comparando o Valor Venal do terreno, da construção e o valor total dos anos de 2025 e 2026.</p>

              <p>Caso, mesmo após essas explicações, ainda haja dúvida ou discordância, a Prefeitura orienta a abertura de um Protocolo Web, para que a equipe técnica realize uma análise detalhada do caso.</p>

              <p>A mensagem central é que esse conjunto de medidas buscou justiça fiscal, corrigindo distorções históricas, atualizando valores extremamente defasados e garantindo que os benefícios fiscais sejam direcionados a quem realmente precisa, sempre em cumprimento à legislação e às orientações dos órgãos de controle.</p>

              <p>Além disso, o processo está fundamentado em planejamento e sustentabilidade, promovendo desenvolvimento sustentável, progresso sustentável e a consolidação de uma cidade valorizada e organizada, onde atualizar é cuidar do que Boituva já construiu e planejar hoje para proteger o amanhã.</p>
            </div>

            {/* Note Box */}
            <div style={styles.noteBox}>
              <strong>Nota Importante:</strong> Evite termos excessivamente técnicos. Utilize analogias simples para explicar o conceito de "Valor Venal" (valor de venda de mercado estimado pela prefeitura).
            </div>
          </div>

          {/* Section 2: ROTEIRO DE ATENDIMENTO */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionNumber}>2</div>
              <h3 style={styles.sectionTitle}>ROTEIRO DE ATENDIMENTO</h3>
            </div>

            <div style={styles.timeline}>
              {/* BLOCO 1 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 1: Como Iniciar a Conversa com o Cidadão</h4>
                  <p style={styles.blockText}>Sempre comece com acolhimento:</p>
                  <div style={styles.quoteBox}>
                    "A Prefeitura entende que mudanças no IPTU geram dúvidas e preocupação. Por isso, nossa orientação é explicar tudo com clareza, calma e transparência."
                  </div>
                  <ul style={styles.bulletList}>
                    <li>Baixa a tensão</li>
                    <li>Mostra empatia</li>
                    <li>Abre espaço para escuta</li>
                  </ul>
                </div>
              </div>

              {/* BLOCO 2 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 2: O que de Fato foi Feito (Ponto-Chave)</h4>
                  <p style={styles.blockText}>Explique com clareza:</p>
                  <div style={styles.quoteBox}>
                    "O que foi realizado não foi um aumento decidido por vontade da Prefeitura. O que houve foi a atualização obrigatória do cadastro imobiliário, incluindo o Valor Venal dos imóveis."
                  </div>
                  <ul style={styles.bulletList}>
                    <li>Valor Venal = base de cálculo do IPTU</li>
                    <li>Estava sem atualização geral desde 1989</li>
                    <li>Estava muito abaixo da realidade atual</li>
                  </ul>
                </div>
              </div>

              {/* BLOCO 3 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 3: Por que Isso Precisou Acontecer Agora</h4>
                  <p style={styles.blockText}>Explique a origem:</p>
                  <div style={styles.quoteBox}>
                    "Esse processo começou com mudanças na legislação tributária federal, que passaram a exigir que os municípios mantivessem seus cadastros e valores próximos da realidade do mercado imobiliário. Iniciativa do Governo do Estado e necessidade para não ter problemas com o Tribunal de Contas."
                  </div>
                  <div style={styles.quoteBox}>
                    "Além disso, o Governo do Estado realizou estudos mercadológicos em Boituva e em outros municípios, levantando valores praticados no mercado por região."
                  </div>
                  <ul style={styles.bulletList}>
                    <li>Não foi iniciativa isolada</li>
                    <li>Foi movimento nacional e estadual</li>
                    <li>Houve base técnica</li>
                  </ul>
                </div>
              </div>

              {/* Infographic */}
              <div style={styles.infographicContainer}>
                <img src="infografico.jpg" alt="Infográfico Atualização do IPTU" style={styles.infographic} />
                <div style={styles.figureCaption}>FIGURA 1: INFOGRÁFICO - Atualização do IPTU em Boituva</div>
              </div>

              {/* BLOCO 4 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 4: Papel do Tribunal de Contas</h4>
                  <p style={styles.blockText}>Explique com firmeza e tranquilidade:</p>
                  <div style={styles.quoteBox}>
                    "Diante das mudanças legais, dos estudos técnicos e dos apontamentos do Tribunal de Contas — especialmente pelo longo período sem atualização — a Prefeitura teve obrigação legal de revisar o cadastro."
                  </div>
                  <p style={styles.blockText}>Frase-chave:</p>
                  <div style={styles.quoteBox}>
                    "Não foi decisão política opcional. Foi dever institucional."
                  </div>
                </div>
              </div>

              {/* BLOCO 5 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 5: Atualização dos Terrenos e das Construções</h4>
                  <p style={styles.blockText}><strong>Terrenos:</strong> Atualização do Valor Venal do terreno, conforme estudos.</p>
                  <p style={styles.blockText}><strong>Construções:</strong> Explique com cuidado:</p>
                  <div style={styles.quoteBox}>
                    "Existia uma lei antiga que permitia a depreciação automática das construções ao longo do tempo, gerando descontos permanentes no imposto, mesmo quando o imóvel estava em bom estado."
                  </div>
                  <div style={styles.quoteBox}>
                    "Essa lei foi revogada, e os imóveis que se beneficiavam desse mecanismo tiveram os valores de construção atualizados."
                  </div>
                  <ul style={styles.bulletList}>
                    <li>Não é punição</li>
                    <li>É correção de distorção</li>
                  </ul>
                </div>
              </div>

               {/* BLOCO 6 */}
               <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 6: Isenções e Justiça Social</h4>
                  <p style={styles.blockText}>Explique claramente:</p>
                  <div style={styles.quoteBox}>
                    "A legislação de isenções também foi atualizada para ser mais justa e focada em quem realmente precisa."
                  </div>
                  <p style={styles.blockText}>Exemplos: ZEIS, aposentados com um único imóvel onde residem, critérios sociais definidos em lei.</p>
                  <div style={styles.quoteBox}>
                    "Isso mostra que não é só justiça fiscal, é justiça social."
                  </div>
                </div>
              </div>

              {/* BLOCO 7 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 7: Valores de Mercado (Ponto Sensível)</h4>
                  <p style={styles.blockText}>Explique com muita atenção:</p>
                  <div style={styles.quoteBox}>
                    "Foram considerados valores de mercado, mas de forma criteriosa e responsável."
                  </div>
                  <div style={styles.quoteBox}>
                    "Na maioria dos casos, os valores atualizados ficaram abaixo dos valores praticados no mercado imobiliário."
                  </div>
                  <ul style={styles.bulletList}>
                    <li>Maioria dos imóveis foi contemplada de forma benéfica</li>
                    <li>Houve cuidado para não aplicar valores máximos</li>
                    <li>A transição foi equilibrada</li>
                  </ul>
                </div>
              </div>

              {/* BLOCO 8 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 8: Como o Trabalho foi Feito</h4>
                  <p style={styles.blockText}>Explique para gerar confiança:</p>
                  <div style={styles.quoteBox}>
                    "Todo o trabalho foi conduzido por um Grupo de Trabalho do governo do estado, com setores técnicos da Prefeitura, participação do CRECI e representantes da sociedade civil."
                  </div>
                </div>
              </div>

              {/* BLOCO 9 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 9: Cada Imóvel é um Caso</h4>
                  <p style={styles.blockText}>Explique assim:</p>
                  <div style={styles.quoteBox}>
                    "Cada imóvel tem características próprias. Por isso, a análise é sempre individual."
                  </div>
                  <p style={styles.blockText}>Oriente o cidadão a comparar 2025 x 2026 e separar: valor do terreno, valor da construção e valor total.</p>
                </div>
              </div>

              {/* BLOCO 10 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 10: Se Houver Dúvida ou Discordância</h4>
                  <p style={styles.blockText}>Nunca discuta. Oriente:</p>
                  <div style={styles.quoteBox}>
                    "Se ainda houver dúvida ou discordância, a Prefeitura orienta a abertura de um Protocolo Web para análise técnica detalhada."
                  </div>
                  <ul style={styles.bulletList}>
                    <li>Organiza o fluxo</li>
                    <li>Evita conflito</li>
                    <li>Garante direito do cidadão</li>
                  </ul>
                </div>
              </div>

              {/* BLOCO 11 */}
              <div style={styles.timelineItem}>
                <div style={styles.timelineContent}>
                  <h4 style={styles.blockTitle}>BLOCO 11: Mensagem Final</h4>
                  <p style={styles.blockText}>Feche sempre com esta lógica:</p>
                  <div style={styles.quoteBox}>
                    "Esse conjunto de medidas buscou corrigir distorções históricas, garantir justiça fiscal e justiça social, cumprir a legislação e preparar a cidade para o futuro."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div style={styles.checklistContainer}>
            <div style={styles.checklistHeader}>
              <CheckSquare color="#0d9488" size={24} />
              <h3 style={styles.checklistTitle}>CHECKLIST MENTAL DO SERVIDOR</h3>
            </div>

            <div style={styles.checklistGrid}>
              {[
                "Não foi aumento arbitrário",
                "Confirmou o endereço de correspondência?",
                "Foi atualização obrigatória",
                "Teve base legal, técnica e estadual",
                "Protegeu quem precisa",
                "Beneficiou a maioria",
                "Cada caso é individual",
                "Existe canal de revisão"
              ].map((item, index) => (
                <div key={index} style={styles.checklistItem}>
                  <div style={styles.checkbox}></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       {/* Footer */}
       <div style={styles.footer}>
        © 2026 Prefeitura Municipal de Boituva.
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 70px)',
    background: 'linear-gradient(to bottom right, #ecfeff, #f0fdfa, #f0fdf4)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    paddingBottom: '48px'
  },
  header: {
    padding: '48px 16px',
    textAlign: 'center',
    background: '#f0fdfa'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '12px',
    marginTop: 0
  },
  subtitle: {
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '16px',
    lineHeight: '1.5'
  },
  gradientBar: {
    height: '4px',
    background: 'linear-gradient(to right, #14b8a6, #10b981, #fbbf24)',
    marginBottom: '32px'
  },
  contentContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 16px'
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '48px',
    marginBottom: '32px'
  },
  internalHeader: {
    textAlign: 'center',
    marginBottom: '48px',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '32px'
  },
  internalLabel: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#84cc16',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px'
  },
  internalTitle: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#0f766e',
    margin: 0,
    lineHeight: '1.2'
  },
  section: {
    marginBottom: '48px'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px'
  },
  sectionNumber: {
    width: '32px',
    height: '32px',
    background: '#84cc16',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#84cc16',
    margin: 0,
    textTransform: 'uppercase'
  },
  textBlock: {
    color: '#374151',
    lineHeight: '1.8',
    fontSize: '16px',
    textAlign: 'justify'
  },
  noteBox: {
    background: '#eff6ff',
    borderLeft: '4px solid #3b82f6',
    padding: '16px',
    marginTop: '24px',
    borderRadius: '0 8px 8px 0',
    color: '#1e40af',
    fontStyle: 'italic'
  },
  timeline: {
    position: 'relative',
    paddingLeft: '24px',
    borderLeft: '2px solid #e5e7eb',
    marginLeft: '16px'
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '32px'
  },
  timelineContent: {
    background: 'white',
  },
  blockTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  blockText: {
    color: '#4b5563',
    marginBottom: '12px',
    lineHeight: '1.6'
  },
  quoteBox: {
    background: '#f8fafc',
    padding: '16px',
    borderRadius: '8px',
    borderLeft: '4px solid #cbd5e1',
    color: '#334155',
    marginBottom: '16px',
    fontStyle: 'italic'
  },
  bulletList: {
    listStyleType: 'disc',
    paddingLeft: '24px',
    color: '#4b5563',
    lineHeight: '1.6'
  },
  infographicContainer: {
    margin: '48px 0',
    padding: '24px',
    background: '#f9fafb',
    borderRadius: '12px',
    border: '2px dashed #e5e7eb',
    textAlign: 'center'
  },
  infographic: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  figureCaption: {
    marginTop: '16px',
    color: '#9ca3af',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  checklistContainer: {
    background: '#f0fdfa',
    borderRadius: '12px',
    padding: '32px'
  },
  checklistHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px'
  },
  checklistTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1f2937'
  },
  checklistGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px'
  },
  checklistItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#4b5563'
  },
  checkbox: {
    width: '20px',
    height: '20px',
    border: '2px solid #cbd5e1',
    borderRadius: '4px',
    background: 'white'
  },
  footer: {
    textAlign: 'center',
    paddingTop: '32px',
    color: '#6b7280',
    fontSize: '14px'
  }
};
