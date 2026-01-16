import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Consulta from './pages/Consulta';
import Script from './pages/Script';

function App() {
  return (
    <div style={styles.container}>
      <style>{cssStyles}</style>
      
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerCard}>
          <div style={styles.headerContent}>
            <img src="logo.png" alt="Prefeitura de Boituva" style={styles.logo} />
          </div>
        </div>

        <h1 style={styles.title}>
          {dados ? 'Consulta Pública de IPTU' : 'Consulta de IPTU'}
        </h1>
        <p style={styles.subtitle}>
          {dados 
            ? 'Consulte os dados cadastrais e valores do seu imóvel de forma simples e rápida.'
            : 'Informe o número do cadastro para consultar débitos.'}
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
              </div>
            </div>
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

export default App;
