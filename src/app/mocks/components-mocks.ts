import { ButtonItem, goToItem } from "../interfaces/componentsInterfaces";

export const gotoContent : goToItem [] = [
  {
    text: 'Você pode ter até 5 cartões!!!',
    title: 'Peça seu Cartão',
    route: 'cartoes'
  },
  {
    text: 'Use nossa plataforma para investir em fundos e ações',
    title: 'Investimentos',
    route: 'investimentos'
  },
  {
    text: 'Veja se você já possui um crédito pré aprovado, ou solicite seu imprestimo',
    title: 'Empréstimos',
    route: 'emprestimos'
  },
  {
    text: 'Você pode fazer compras na nossa loja e receber Cashbaks únicos',
    title: 'Loja Virtual',
    route: 'loja'
  },
  {
    text: 'Traga os seus dados de outros bancos pra gente te conecer melhor',
    title: 'Open Finance',
    route: 'open-finance'
  }
];

export const carrousselButtonContent : ButtonItem [] = [
  {
    innerText: 'Recargas',
    route: 'recargas',
  },
  {
    innerText: 'PIX',
    route: 'pix'
  },
  {
    innerText: 'Extrato',
    route: 'extrato'
  },
  {
    innerText: 'Pagamentos',
    route: 'pagamentos'
  },
  {
    innerText: 'Benefícios',
    route: 'beneficios'
  }
]

export const userData = {
  name: 'Eduardo Baptista da Silva',
  firstName: 'Eduardo',
  balance: '15000'
}