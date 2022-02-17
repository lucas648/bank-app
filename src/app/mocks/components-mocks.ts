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
    route: 'balance'
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

export const userBalance ={
  userCPF: '',
  balance: [
  {
    value: 'R$ 15,00',
    type: 'Transporte',
    date: '06/02/2022'
  },
  {
    value: 'R$ 45,00',
    type: 'Bebida',
    date: '06/02/2022'
  },  
  {
    value: 'R$ 34,00',
    type: 'Restaurante',
    date: '06/02/2022'
  }, 
  {
    value: 'R$ 5,00',
    type: 'Utilidades',
    date: '05/02/2022'
  },
  {
    value: 'R$ 95,00',
    type: 'Educação',
    date: '05/02/2022'
  },
  {
    value: 'R$ 15,00',
    type: 'Farmácia',
    date: '04/02/2022'
  },
  {
    value: 'R$ 65,00',
    type: 'Transferência PIX',
    date: '03/02/2022'
  },
]}