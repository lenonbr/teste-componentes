# Onda Components

Uma biblioteca de componentes React para o sistema Onda.

## Instalação

```bash
npm install git+https://github.com/ondasegura/onda-components.git
```

## Uso

```typescript
import { controller_conta_pagar } from 'onda-components';

// Exemplo de uso do controller
const contasPagar = controller_conta_pagar.contexto.jsx.get_pagina();
const modalState = controller_conta_pagar.contexto.jsx.get_modal();

// Buscar contas a pagar
await controller_conta_pagar.api.buscar_pelo_filtro({
  filtros: {
    conta_pagar: {
      // seus filtros aqui
    }
  }
});

// Criar uma nova conta a pagar
await controller_conta_pagar.api.criar({
  data: {
    // dados da conta a pagar
  }
});
```

## Desenvolvimento

Para desenvolver a biblioteca:

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build da biblioteca
npm run build
```

## Componentes Disponíveis

### controller_conta_pagar

Controller para gerenciamento de contas a pagar com estado global usando Zustand.

#### API Methods
- `criar(props)` - Criar nova conta a pagar
- `buscar_pelo_filtro(props)` - Buscar contas por filtro
- `buscar_pelo_id(props)` - Buscar conta específica
- `atualizar_pelo_id(props)` - Atualizar conta existente
- `deletar_pelo_id(props)` - Deletar conta

#### Context Methods
- `contexto.jsx.get_formulario()` - Estado do formulário
- `contexto.jsx.get_pagina()` - Estado da página
- `contexto.jsx.get_modal()` - Estado do modal
- `contexto.state.reset()` - Reset do estado
- `contexto.state.set_open_formulario(id?)` - Abrir formulário
- `contexto.state.set_close_formulario()` - Fechar formulário