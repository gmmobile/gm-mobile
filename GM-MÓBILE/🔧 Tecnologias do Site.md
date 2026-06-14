# Tecnologias do Site — GM Móbile

## Stack
- **HTML5** — semântico, sem frameworks
- **CSS3** — custom properties (variáveis), Flexbox, Grid, animações puras
- **JavaScript** — Vanilla JS (sem jQuery, sem frameworks)
- **Google Fonts** — Cormorant Garamond + Montserrat
- **Imagens** — Unsplash (placeholder, substituir por fotos reais da GM Móbile)

## Funcionalidades JS (js/main.js)

### Navbar
- Scroll listener → adiciona classe `.scrolled` após 50px (blur + border)

### Fade-in on Scroll
- `IntersectionObserver` — elementos com `.fade-in` ganham `.visible` ao entrar na viewport
- Delay escalonado (i × 80ms) para grupos de elementos

### Contador Animado
- `data-count="500"` + `data-suffix="+"` em qualquer elemento
- Animação cubic ease-out em 1800ms

### Portfólio com Filtro
- `.filter-btn[data-filter]` + `.portfolio-item[data-cat]`
- Fade out/in com display:none + opacity

### Marquee Infinito (sem corte)
- JS clona os itens filhos (não o track) dentro do mesmo `.marquee-track`
- Track fica com 2× os itens
- CSS anima `translateX(0)` → `translateX(-50%)` — volta exatamente ao ponto de origem
- Resultado: loop suave e contínuo

### Formulário de Contato
- Submit com feedback visual (botão verde + reset após 3s)
- Simulado (sem backend) — para integrar, conectar a Formspree, EmailJS ou backend próprio

### Active Nav Link
- Detecta página atual por `window.location.pathname`

## Responsividade
- Mobile first com breakpoints: 1100px, 768px, 480px
- Menu mobile: overlay fullscreen com animação
- Grid adaptativo em todas as seções

## Próximos Passos Técnicos Sugeridos
- [ ] Substituir imagens Unsplash por fotos reais dos projetos
- [ ] Integrar formulário com backend (Formspree / EmailJS)
- [ ] Adicionar Google Analytics / Meta Pixel
- [ ] Hospedar em domínio próprio (ex: gmmobile.com.br)
- [ ] Otimizar imagens (WebP + lazy loading já implementado)
- [ ] SEO: adicionar Open Graph tags para redes sociais

## Links Relacionados
- [[📁 Site — Estrutura e Páginas]]
- [[🎨 Identidade Visual]]
- [[🏠 GM Móbile — Visão Geral]]
