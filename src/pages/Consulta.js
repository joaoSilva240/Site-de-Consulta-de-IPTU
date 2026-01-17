import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Search, MapPin, Calendar, Building2, Mountain, Sparkles, Hammer, Lightbulb, FileText, BadgePercent, Info } from 'lucide-react';

export default function Consulta() {
  const [cadastro, setCadastro] = useState('');
  const [dados, setDados] = useState(null);
  const [planilhaData, setPlanilhaData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  // Carregar planilha XLSX
  useEffect(() => {
    const carregarPlanilha = async () => {
      try {
        const response = await fetch('dados.xlsx');

        if (!response.ok) {
          throw new Error('Arquivo não encontrado');
        }

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const dados = XLSX.utils.sheet_to_json(worksheet, {
          raw: false,
          defval: ''
        });

        // Normalizar chaves (remover espaços extras) e valores
        const dadosNormalizados = dados.map(item => {
          const novoItem = {};
          Object.keys(item).forEach(key => {
            novoItem[key.trim()] = item[key];
          });
          return novoItem;
        });

        console.log('Planilha carregada com sucesso:', dadosNormalizados.length, 'registros');
        setPlanilhaData(dadosNormalizados);
      } catch (error) {
        console.error('Erro ao carregar planilha:', error);
        // Fallback data
        const dadosExemplo = [
          {
            CADASTRO: '01.02.034.0567.001',
            'ENDEREÇO': 'Rua São Pedro, 123 - Centro, Boituva - SP',
            'AREA DO TERRENO M²': '250.00',
            'AREA CONSTRUÇÃO M²': '185.50',
            'VALOR VENAL CONSTRUÇÃO 2025': '230500.00',
            'VALOR VENAL TERRENO 2025': '150000.00',
            'VALOR VENAL TOTAL 2025': '380500.00',
            'IPTU 2025': '1250.00',
            'IMPOSTO TERRITORIAL 2025': '420.00',
            'IMPOSTO PREDIAL 2025': '580.00',
            'ISENÇÃO 2025': '0.00',
            'TAXA LIMPEZA 2025': '125.00',
            'TAXA CONSERVAÇÃO 2025': '65.00',
            'CIP 2025': '35.00',
            'TAXA EXPEDIENTE 2025': '25.00',
            'VALOR VENAL CONSTRUÇÃO 2026': '245000.00',
            'VALOR VENAL TERRENO 2026': '165000.00',
            'VALOR VENAL TOTAL 2026': '410000.00',
            'IPTU 2026': '1380.50',
            'IMPOSTO TERRITORIAL 2026': '460.00',
            'IMPOSTO PREDIAL 2026': '640.00',
            'ISENÇÃO 2026': '0.00',
            'TAXA LIMPEZA 2026': '138.50',
            'TAXA CONSERVAÇÃO 2026': '72.00',
            'CIP 2026': '45.00',
            'TAXA EXPEDIENTE 2026': '25.00',
            'OBSERVAÇÕES VALOR VENAL TERRENO': 'Grande discrepância no Valor Venal do Terreno (2026 muito maior que 2025). Sugere-se verificar a legislação municipal vigente e os fatores de correção aplicados para garantir a precisão do novo cálculo do valor venal.',
            'OBSERVAÇÕES VALOR VENAL CONSTRUÇÃO': 'A reavaliação da construção resultou em um aumento substancial do Valor Venal (Ex: R$ 191.651,39 vs R$ 137.989,00). Conferir a metragem quadrada e o padrão construtivo classificado para evitar inconsistências no cálculo.',
            'OBSERVAÇÕES IPTU': 'A alta no IPTU (Ex: R$ 1.876,90 vs R$ 1.314,41) é proporcional ao reajuste do Valor Venal Total. Não houve isenções aplicadas neste cadastro, confirmando o cálculo baseado nos valores de 2026.'
          }
        ];
        console.log('Usando dados de exemplo');
        setPlanilhaData(dadosExemplo);
      }
    };

    carregarPlanilha();
  }, []);

  const parseValor = (valor) => {
    if (typeof valor === 'number') return valor;
    if (!valor) return 0;
    // Remove R$, espaços e vírgulas (formato americano/excel: 76,294.07)
    const valorLimpo = valor.toString().replace(/R\$/g, '').replace(/\s/g, '').replace(/,/g, '');
    return parseFloat(valorLimpo);
  };

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const formatarNumero = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor);
  };

  const buscarDados = () => {
    setLoading(true);
    setErro('');

    setTimeout(() => {
      const normalize = (str) => str ? str.toString().replace(/[^0-9]/g, '') : '';

      const resultado = planilhaData.find(
        item => normalize(item.CADASTRO) === normalize(cadastro)
      );

      if (resultado) {
        const dadosNormalizados = {
          CADASTRO: resultado.CADASTRO,
          ENDERECO: resultado['ENDEREÇO'] || resultado.ENDERECO,
          AREA_TERRENO: parseValor(resultado['AREA DO TERRENO M²'] || resultado.AREA_TERRENO),
          AREA_CONSTRUCAO: parseValor(resultado['AREA CONSTRUÇÃO M²'] || resultado.AREA_CONSTRUCAO),

          // 2025 Values
          VALOR_VENAL_CONSTRUCAO_2025: parseValor(resultado['VALOR VENAL CONSTRUÇÃO 2025'] || resultado.VALOR_VENAL_CONSTRUCAO_2025),
          VALOR_VENAL_TERRENO_2025: parseValor(resultado['VALOR VENAL TERRENO 2025'] || resultado.VALOR_VENAL_TERRENO_2025),
          VALOR_VENAL_TOTAL_2025: parseValor(resultado['VALOR VENAL TOTAL 2025'] || resultado.VALOR_VENAL_TOTAL_2025),
          IPTU_2025: parseValor(resultado['IPTU 2025'] || resultado.IPTU_2025),
          IMPOSTO_TERRITORIAL_2025: parseValor(resultado['IMPOSTO TERRITORIAL 2025'] || resultado.IMPOSTO_TERRITORIAL_2025),
          IMPOSTO_PREDIAL_2025: parseValor(resultado['IMPOSTO PREDIAL 2025'] || resultado.IMPOSTO_PREDIAL_2025),
          ISENCAO_2025: parseValor(resultado['ISENÇÃO 2025'] || resultado.ISENCAO_2025),
          TAXA_LIMPEZA_2025: parseValor(resultado['TAXA LIMPEZA 2025'] || resultado.TAXA_LIMPEZA_2025),
          TAXA_CONSERVACAO_2025: parseValor(resultado['TAXA CONSERVAÇÃO 2025'] || resultado.TAXA_CONSERVACAO_2025),
          CIP_2025: parseValor(resultado['CIP 2025'] || resultado.CIP_2025),
          TAXA_EXPEDIENTE_2025: parseValor(resultado['TAXA EXPEDIENTE 2025'] || resultado.TAXA_EXPEDIENTE_2025),

          // 2026 Values
          VALOR_VENAL_CONSTRUCAO_2026: parseValor(resultado['VALOR VENAL CONSTRUÇÃO 2026'] || resultado.VALOR_VENAL_CONSTRUCAO_2026),
          VALOR_VENAL_TERRENO_2026: parseValor(resultado['VALOR VENAL TERRENO 2026'] || resultado.VALOR_VENAL_TERRENO_2026),
          VALOR_VENAL_TOTAL_2026: parseValor(resultado['VALOR VENAL TOTAL 2026'] || resultado.VALOR_VENAL_TOTAL_2026),
          IPTU_2026: parseValor(resultado['IPTU 2026'] || resultado.IPTU_2026),
          IMPOSTO_TERRITORIAL_2026: parseValor(resultado['IMPOSTO TERRITORIAL 2026'] || resultado.IMPOSTO_TERRITORIAL_2026),
          IMPOSTO_PREDIAL_2026: parseValor(resultado['IMPOSTO PREDIAL 2026'] || resultado.IMPOSTO_PREDIAL_2026),
          ISENCAO_2026: parseValor(resultado['ISENÇÃO 2026'] || resultado.ISENCAO_2026),
          TAXA_LIMPEZA_2026: parseValor(resultado['TAXA LIMPEZA 2026'] || resultado.TAXA_LIMPEZA_2026),
          TAXA_CONSERVACAO_2026: parseValor(resultado['TAXA CONSERVAÇÃO 2026'] || resultado.TAXA_CONSERVACAO_2026),
          CIP_2026: parseValor(resultado['CIP 2026'] || resultado.CIP_2026),
          TAXA_EXPEDIENTE_2026: parseValor(resultado['TAXA EXPEDIENTE 2026'] || resultado.TAXA_EXPEDIENTE_2026),

          // Observações
          OBS_TERRENO: resultado['OBSERVAÇÕES VALOR VENAL TERRENO'] || '',
          OBS_CONSTRUCAO: resultado['OBSERVAÇÕES VALOR VENAL CONSTRUÇÃO'] || '',
          OBS_IPTU: resultado['OBSERVAÇÕES IPTU'] || ''
        };

        setDados(dadosNormalizados);
      } else {
        setErro('Cadastro não encontrado. Verifique o número e tente novamente.');
        setDados(null);
      }
      setLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      buscarDados();
    }
  };

  return (
    <div style={styles.container}>
      <style>{cssStyles}</style>

      {/* Header */}
       <div style={styles.header}>
        {/* <div style={styles.headerCard}>
            <div style={styles.headerContent}>
                <h1 style={styles.titleMain}>Consulta IPTU</h1>
            </div>
        </div>  */}

        <h1 style={styles.title}>
          {dados ? 'Dados do Imóvel' : 'Consulta de Valores'}
        </h1>
        <p style={styles.subtitle}>
          {dados
            ? 'Confira abaixo os dados cadastrais e o comparativo de valores.'
            : 'Informe o número do cadastro para consultar os dados do imóvel.'}
        </p>
      </div>

      {/* Gradient Bar */}
      <div style={styles.gradientBar}></div>

      {/* Search Card */}
      <div style={styles.searchContainer}>
        <div style={styles.searchCard}>
          <label style={styles.label}>
            Número do Cadastro do Imóvel
          </label>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={cadastro}
              onChange={(e) => setCadastro(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite apenas números"
              style={styles.input}
            />
          </div>

          <button
            onClick={buscarDados}
            disabled={loading || !cadastro.trim()}
            style={{
              ...styles.button,
              ...(loading || !cadastro.trim() ? styles.buttonDisabled : {})
            }}
          >
            <Search size={20} />
            <span>{loading ? 'Consultando...' : 'Consultar Dados'}</span>
          </button>

          {erro && (
            <div style={styles.errorBox}>
              {erro}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      {dados && (
        <div style={styles.resultsContainer}>
          {/* Property Info */}
          <div style={styles.propertyCard}>
            <div style={styles.propertyContent}>
              <div style={styles.iconCircle}>
                <MapPin color="#0d9488" size={24} />
              </div>
              <div style={styles.propertyInfo}>
                <div style={styles.propertyLabel}>Imóvel Localizado</div>
                <div style={styles.propertyAddress}>{dados.ENDERECO}</div>
                <div style={styles.propertyAreas}>
                  <div>
                    <div style={styles.areaLabel}>Área Terreno</div>
                    <div style={styles.areaValue}>{formatarNumero(dados.AREA_TERRENO)} m²</div>
                  </div>
                  <div>
                    <div style={styles.areaLabel}>Área Construída</div>
                    <div style={styles.areaValue}>{formatarNumero(dados.AREA_CONSTRUCAO)} m²</div>
                  </div>
                </div>
              </div>
              <div style={styles.badge}>
                <div style={styles.badgeDot}></div>
                Cadastro Ativo
              </div>
            </div>
          </div>

          {/* Tax Cards */}
          <div style={styles.taxCardsContainer}>
            {/* 2025 */}
            <div style={styles.taxCard}>
              <div style={{...styles.taxCardHeader, background: 'linear-gradient(to right, #22c55e, #10b981)'}}>
                <Calendar size={28} />
                <h2 style={styles.taxCardTitle}>Exercício 2025</h2>
              </div>

              <div style={styles.taxCardBody}>
                <div style={styles.taxRow}>
                  <div style={styles.taxLabel}>
                    <span style={styles.taxIcon}>▲</span>
                    <span>Valor Venal Terreno</span>
                  </div>
                  <span style={styles.taxValue}>
                    {formatarMoeda(dados.VALOR_VENAL_TERRENO_2025)}
                  </span>
                </div>

                <div style={styles.taxRow}>
                  <div style={styles.taxLabel}>
                    <span style={styles.taxIcon}>⌂</span>
                    <span>Valor Venal Construção</span>
                  </div>
                  <span style={styles.taxValue}>
                    {formatarMoeda(dados.VALOR_VENAL_CONSTRUCAO_2025)}
                  </span>
                </div>

                <div style={{...styles.taxRow, ...styles.taxRowTotal}}>
                  <div style={styles.taxLabelTotal}>
                    <span style={styles.taxIconTotal}>Σ</span>
                    <span>Valor Venal Total</span>
                  </div>
                  <span style={styles.taxValueTotal}>
                    {formatarMoeda(dados.VALOR_VENAL_TOTAL_2025)}
                  </span>
                </div>

                <div style={{...styles.iptuBox, background: '#f0fdf4'}}>
                  <span style={styles.iptuLabel}>IPTU 2025</span>
                  <span style={{...styles.iptuValue, color: '#22c55e'}}>
                    {formatarMoeda(dados.IPTU_2025)}
                  </span>
                </div>

                {/* Composição do Imposto 2025 */}
                <div style={styles.compositionContainer}>
                  <p style={styles.compositionTitle}>Composição do Imposto</p>
                  <div style={styles.compositionList}>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Mountain size={18} />
                        <span>Imposto Territorial</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.IMPOSTO_TERRITORIAL_2025)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Building2 size={18} />
                        <span>Imposto Predial</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.IMPOSTO_PREDIAL_2025)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <BadgePercent size={18} />
                        <span>Isenção</span>
                      </div>
                      <span style={{...styles.compositionValue, color: '#ef4444'}}>{formatarMoeda(dados.ISENCAO_2025)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Sparkles size={18} />
                        <span>Taxa de Limpeza</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.TAXA_LIMPEZA_2025)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Hammer size={18} />
                        <span>Taxa de Conservação</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.TAXA_CONSERVACAO_2025)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Lightbulb size={18} />
                        <span>CIP</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.CIP_2025)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <FileText size={18} />
                        <span>Taxa de Expediente</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.TAXA_EXPEDIENTE_2025)}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* 2026 */}
            <div style={styles.taxCard}>
              <div style={{...styles.taxCardHeader, background: 'linear-gradient(to right, #14b8a6, #06b6d4)'}}>
                <Calendar size={28} />
                <h2 style={styles.taxCardTitle}>Exercício 2026</h2>
              </div>

              <div style={styles.taxCardBody}>
                <div style={styles.taxRow}>
                  <div style={styles.taxLabel}>
                    <span style={styles.taxIcon}>▲</span>
                    <span>Valor Venal Terreno</span>
                  </div>
                  <span style={styles.taxValue}>
                    {formatarMoeda(dados.VALOR_VENAL_TERRENO_2026)}
                  </span>
                </div>

                <div style={styles.taxRow}>
                  <div style={styles.taxLabel}>
                    <span style={styles.taxIcon}>⌂</span>
                    <span>Valor Venal Construção</span>
                  </div>
                  <span style={styles.taxValue}>
                    {formatarMoeda(dados.VALOR_VENAL_CONSTRUCAO_2026)}
                  </span>
                </div>

                <div style={{...styles.taxRow, ...styles.taxRowTotal}}>
                  <div style={styles.taxLabelTotal}>
                    <span style={styles.taxIconTotal}>Σ</span>
                    <span>Valor Venal Total</span>
                  </div>
                  <span style={styles.taxValueTotal}>
                    {formatarMoeda(dados.VALOR_VENAL_TOTAL_2026)}
                  </span>
                </div>

                <div style={{...styles.iptuBox, background: '#f0fdfa'}}>
                  <span style={styles.iptuLabel}>IPTU 2026</span>
                  <span style={{...styles.iptuValue, color: '#14b8a6'}}>
                    {formatarMoeda(dados.IPTU_2026)}
                  </span>
                </div>

                {/* Composição do Imposto 2026 */}
                <div style={styles.compositionContainer}>
                  <p style={styles.compositionTitle}>Composição do Imposto</p>
                  <div style={styles.compositionList}>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Mountain size={18} />
                        <span>Imposto Territorial</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.IMPOSTO_TERRITORIAL_2026)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Building2 size={18} />
                        <span>Imposto Predial</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.IMPOSTO_PREDIAL_2026)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <BadgePercent size={18} />
                        <span>Isenção</span>
                      </div>
                      <span style={{...styles.compositionValue, color: '#ef4444'}}>{formatarMoeda(dados.ISENCAO_2026)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Sparkles size={18} />
                        <span>Taxa de Limpeza</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.TAXA_LIMPEZA_2026)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Hammer size={18} />
                        <span>Taxa de Conservação</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.TAXA_CONSERVACAO_2026)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <Lightbulb size={18} />
                        <span>CIP</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.CIP_2026)}</span>
                    </div>

                    <div style={styles.compositionRow}>
                      <div style={styles.compositionLabel}>
                        <FileText size={18} />
                        <span>Taxa de Expediente</span>
                      </div>
                      <span style={styles.compositionValue}>{formatarMoeda(dados.TAXA_EXPEDIENTE_2026)}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Observações */}
            {(dados.OBS_TERRENO || dados.OBS_CONSTRUCAO || dados.OBS_IPTU) && (
              <div style={styles.taxCard}>
                <div style={{...styles.taxCardHeader, background: 'linear-gradient(to right, #f7a700, #d97706)'}}>
                  <Info size={28} />
                  <h2 style={styles.taxCardTitle}>Observações</h2>
                </div>

                <div style={styles.taxCardBody}>
                  {dados.OBS_TERRENO && (
                    <div style={styles.obsRow}>
                      <span style={styles.obsLabel}>Observações Valor Venal Terreno</span>
                      <span style={styles.obsValue}>{dados.OBS_TERRENO}</span>
                    </div>
                  )}
                  {dados.OBS_CONSTRUCAO && (
                    <div style={styles.obsRow}>
                      <span style={styles.obsLabel}>Observações Valor Venal Construção</span>
                      <span style={styles.obsValue}>{dados.OBS_CONSTRUCAO}</span>
                    </div>
                  )}
                  {dados.OBS_IPTU && (
                    <div style={styles.obsRow}>
                      <span style={styles.obsLabel}>Observações IPTU</span>
                      <span style={styles.obsValue}>{dados.OBS_IPTU}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Footer */}
      <div style={styles.footer}>
        © 2026 Prefeitura Municipal de Boituva.
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 70px)', // Adjust for navbar height
    background: 'linear-gradient(to bottom right, #ecfeff, #f0fdfa, #f0fdf4)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  header: {
    paddingTop: '48px',
    paddingBottom: '32px',
    textAlign: 'center'
  },
  headerCard: {
    display: 'inline-block',
    background: '#0d9488',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '12px 24px',
    marginBottom: '24px'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    justifyContent: 'center'
  },
  titleMain: {
    margin: 0,
    color: 'white',
    fontSize: '20px',
    fontWeight: '600'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '12px',
    margin: '0 0 12px 0'
  },
  subtitle: {
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 16px'
  },
  gradientBar: {
    height: '4px',
    background: 'linear-gradient(to right, #14b8a6, #10b981, #fbbf24)',
    marginBottom: '32px'
  },
  searchContainer: {
    maxWidth: '672px',
    margin: '0 auto',
    padding: '0 16px',
    marginBottom: '32px'
  },
  searchCard: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    padding: '32px'
  },
  label: {
    display: 'block',
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: '12px'
  },
  inputContainer: {
    position: 'relative',
    marginBottom: '24px'
  },
  input: {
    width: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '16px',
    paddingBottom: '16px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    color: '#374151',
    fontSize: '16px',
    boxSizing: 'border-box',
    outline: 'none'
  },
  button: {
    width: '100%',
    background: '#0d9488',
    color: 'white',
    fontWeight: '600',
    padding: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '16px',
    transition: 'background 0.2s'
  },
  buttonDisabled: {
    background: '#d1d5db',
    cursor: 'not-allowed'
  },
  errorBox: {
    marginTop: '16px',
    padding: '16px',
    background: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    color: '#b91c1c',
    fontSize: '14px'
  },
  resultsContainer: {
    maxWidth: '1152px',
    margin: '0 auto',
    padding: '0 16px 48px'
  },
  propertyCard: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    marginBottom: '24px'
  },
  propertyContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    flexWrap: 'wrap'
  },
  iconCircle: {
    width: '48px',
    height: '48px',
    background: '#ccfbf1',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  propertyInfo: {
    flex: 1,
    minWidth: '250px'
  },
  propertyLabel: {
    fontSize: '12px',
    color: '#6b7280',
    textTransform: 'uppercase',
    marginBottom: '4px'
  },
  propertyAddress: {
    color: '#1f2937',
    fontWeight: '500',
    marginBottom: '12px'
  },
  propertyAreas: {
    display: 'flex',
    gap: '32px'
  },
  areaLabel: {
    fontSize: '12px',
    color: '#6b7280',
    textTransform: 'uppercase',
    marginBottom: '4px'
  },
  areaValue: {
    color: '#1f2937',
    fontWeight: '600'
  },
  badge: {
    background: '#d1fae5',
    color: '#065f46',
    padding: '8px 16px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    background: '#22c55e',
    borderRadius: '50%'
  },
  taxCardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },
  taxCard: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  taxCardHeader: {
    padding: '20px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  taxCardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0
  },
  taxCardBody: {
    padding: '24px'
  },
  taxRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #f3f4f6'
  },
  taxRowTotal: {
    borderBottom: '1px solid #d1d5db'
  },
  taxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#6b7280'
  },
  taxLabelTotal: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#374151',
    fontWeight: '500'
  },
  taxIcon: {
    color: '#9ca3af'
  },
  taxIconTotal: {
    color: '#6b7280'
  },
  taxValue: {
    fontWeight: '600',
    color: '#1f2937'
  },
  taxValueTotal: {
    fontWeight: 'bold',
    color: '#111827'
  },
  iptuBox: {
    borderRadius: '8px',
    padding: '16px',
    marginTop: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iptuLabel: {
    color: '#6b7280',
    fontWeight: '500'
  },
  iptuValue: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  compositionContainer: {
    paddingTop: '8px'
  },
  compositionTitle: {
    fontSize: '10px',
    fontWeight: '900',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '12px'
  },
  compositionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  compositionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#4b5563'
  },
  compositionLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px'
  },
  compositionValue: {
    fontSize: '12px',
    fontWeight: 'bold'
  },
  obsRow: {
    marginBottom: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid #f3f4f6'
  },
  obsLabel: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#6b7280',
    textTransform: 'uppercase',
    marginBottom: '8px'
  },
  obsValue: {
    display: 'block',
    color: '#1f2937',
    fontSize: '14px',
    lineHeight: '1.6'
  },
  footer: {
    textAlign: 'center',
    padding: '32px',
    color: '#6b7280',
    fontSize: '14px'
  }
};

const cssStyles = `
  button:hover:not(:disabled) {
    background: #0f766e !important;
  }

  input:focus {
    outline: 2px solid #14b8a6;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    .taxCardsContainer {
      grid-template-columns: 1fr;
    }
  }
`;
