# Histórico de Alterações — GM Móbile

Toda alteração feita no projeto é registrada aqui.

---

## 2026-06-08

### ✅ Criação do site completo
- Criadas 6 páginas: `index.html`, `sobre.html`, `projetos.html`, `blog.html`, `parceiros.html`, `contato.html`
- Criado `css/style.css` — estilização completa com CSS variables
- Criado `js/main.js` — navbar, fade-in, contador, filtro portfólio, marquee

### ✅ Remoção de emojis
- Todos os emojis substituídos por caracteres Unicode (◆ ◎ ✆ ☏ ◈ ◷ ★ ✓ ▸)
- Substituição feita via PowerShell em todos os 6 arquivos HTML

### ✅ Troca de fontes
- **Antes:** Inter (textos) + Playfair Display (títulos)
- **Depois:** Montserrat (textos/menu/botões) + Cormorant Garamond (títulos)
- Atualizado em `css/style.css` (variáveis `--font-main` e `--font-display`)
- Atualizado link Google Fonts em todos os 6 HTMLs

### ✅ Correção do marquee infinito
- **Problema:** JS clonava o `div.marquee-track` inteiro → criava 2 linhas separadas → corte seco
- **Solução:** JS agora clona apenas os itens filhos dentro do mesmo track (16 itens = 8 originais + 8 clones)
- Animação CSS: `translateX(0)` → `translateX(-50%)` → loop perfeito sem corte
- Velocidade ajustada para 30s

### ✅ Vault do Obsidian configurado
- Notas criadas: Visão Geral, Estrutura do Site, Identidade Visual, Tecnologias, Conteúdo, Parceiros
- Definido como "cérebro" do projeto — toda alteração futura registrada aqui

---

### ✅ Troca de fonte dos títulos
- **Antes:** Cormorant Garamond
- **Depois:** Merriweather (400, 700, 900)
- Atualizado em `css/style.css` (variável `--font-display`)
- Atualizado link Google Fonts em todos os 6 HTMLs

---

### ✅ Crédito de desenvolvimento adicionado
- Adicionado "Desenvolvido por G2 Genesys" no rodapé de todas as 6 páginas
- Link: https://g2genesys.com/ (abre em nova aba)
- Posicionado na linha de copyright do footer bottom

---

### ✅ Ícones SVG de Instagram e WhatsApp
- Substituídos todos os ◈ pelos SVGs corretos de cada rede social
- Instagram → SVG oficial do Instagram (rosa #E1306C nos cards de contato)
- WhatsApp → SVG oficial do WhatsApp
- Locais atualizados: footer social, footer info, card de contato (contato.html)
- Todos os 6 HTMLs verificados — zero ◈ restantes

---

### ✅ Logo.png adicionada ao site
- `logo.png` inserida na navbar e no footer de todas as 6 páginas
- Substituiu o ícone de texto "GM" (div) pelo `<img src="logo.png">`
- Textos "GM MÓBILE" e "Planejados" mantidos ao lado da imagem
- CSS atualizado: `.nav-logo-img` (44×44px) e `.footer-logo-img` (48×48px)

---

### ✅ Tema trocado: dark → light (cinza claro)
- Paleta completamente invertida — fundo cinza claro quente, textos escuros
- `--bg-primary: #F2F1ED` · `--bg-secondary: #E8E6E1` · `--bg-card: #FFFFFF`
- `--text-primary: #1A1916` · `--text-secondary: #5C5A55`
- Dourado levemente ajustado: `--accent: #B8922E` (mais legível no fundo claro)
- Navbar scrolled, mobile-nav e hero-bg atualizados para o novo tema
- Footer: `#DDDBD5` (cinza médio)
- Sombras ajustadas para light (rgba escuro com opacidade baixa)

---

### ✅ Tema refinado: cinza escuro/preto uniforme
- Paleta coesa — cinza carvão escuro com preto profundo
- `--bg-primary: #1A1A1C` · `--bg-secondary: #121214` · `--bg-card: #222226`
- `--text-primary: #F0EDE8` · `--text-secondary: #8C8A86`
- Footer: `#0E0E10` (preto profundo)
- Navbar/mobile-nav: `rgba(26,26,28,0.96/0.98)`
- Hero overlay: escuro restaurado
- Dourado restaurado: `#C4A24A`
- Todos os hardcoded corrigidos para consistência

---

### ✅ Brancos removidos — paleta preto/cinza/dourado
- `--white` → `#C4A24A` (dourado) — usado em `.project-name`
- `btn-ghost` → tint dourado `rgba(196,162,74,0.06/0.12)` em vez de branco
- SVG do botão WA flutuante → `fill="#0E0E10"` (preto) sobre fundo verde
- Overlays de projeto: `#fff` → `#C4A24A` · `rgba(255,255,255,0.6)` → `rgba(196,162,74,0.75)`
- Verificação final: zero branco nos HTMLs

---

### ✅ Ajustes visuais do hero e navbar
- **Imagem hero:** trocada por foto de cozinha moderna escura (Unsplash `photo-1618219944342`)
- **"ambientes" outline:** stroke `2px rgba(196,162,74,0.45)` — dourado sutil, mais visível
- **Navbar ativo:** removido pill, adicionada linha underline dourada de 2px abaixo do item ativo

---

### ✅ Imagens da seção "Sobre" atualizadas
- **index.html** (about teaser):
  - `about-img-main` → `photo-1631679706909-1844bbd07221` (dormitório planejado escuro, luxuoso)
  - `about-img-float` → `photo-1616594039964-ae9021a400a0` (closet planejado, dark luxury)
- **sobre.html** (seção história):
  - `about-img-main` → `photo-1600210492486-724fe5c67fb0` (sala com móveis planejados, escura)
  - `about-img-float` → `photo-1556910103-1c02745aae4d` (cozinha planejada dark)
- Mesma pegada da imagem hero: ambientes escuros, luxuosos, organizados, ar de riqueza

---

### ✅ Responsivo mobile — revisão completa
- **@media 1100px:** `.about-images` com `margin: 0 auto 60px` + `about-badge` reposicionado para `left: 10px`
- **@media 768px:**
  - Padding de seção reduzido: `100px → 64px`
  - Container: `padding: 0 16px`
  - `.about-img-float`: `right: 0; bottom: -24px` (sem overflow)
  - Hero content: `padding: 100px 0 60px`
  - Stats: 2 colunas, `font-size: 2.8rem`
  - Why grid: 2 colunas (em vez de 1)
  - Process: 2 colunas
  - Footer: 1 coluna, bottom em coluna centralizada
  - Page hero: `120px 0 56px`
  - Contact form: `padding: 24px`, form-row 1 coluna
  - Testimonial card: `padding: 24px`
- **@media 480px:**
  - Navbar compacta: logo 36px, fonte menor
  - Hero: botões em coluna, stats em coluna
  - Services/why/process: 1 coluna
  - Stats: mantido 2 colunas (mais legível)
  - About float: `width: 48%`, badge `left: 0`
  - Botões: padding reduzido
  - Footer bottom links: wrap centralizado

---

### ✅ Menu mobile — drawer lateral com efeito e interatividade
- **Estrutura:** menu refeito como drawer lateral (desliza da direita, `translateX(100%) → 0`)
- **Animação:** `0.45s cubic-bezier(0.4,0,0.2,1)` — suave e elegante
- **Backdrop:** overlay escurecido com blur atrás do drawer; fecha ao clicar fora
- **Fechar:** botão ✕ com estilo outline dourado (hover → preenchido dourado)
- **Links:** outline buttons com borda `var(--border)`, cor `var(--text-secondary)`
  - hover → borda dourada + fundo sutil
  - `.active` → borda dourada + texto dourado + fundo dourado leve (detectado por URL)
  - `.pressed` → fundo dourado + texto preto + `scale(0.97)` ao toque
- **Botão WA:** verde #25D366 no footer do drawer
- **Header do drawer:** logo + nome da empresa
- **JS:** `openMobileNav()` / `closeMobileNav()` com `body overflow:hidden` ao abrir
- **Backdrop:** fecha ao clicar fora (`.mobile-nav-backdrop` listener)
- **Cache bust:** atualizado para `202606081520` em todos os 6 HTMLs

---

> **Regra:** Toda alteração feita no projeto deve ser registrada neste arquivo.
