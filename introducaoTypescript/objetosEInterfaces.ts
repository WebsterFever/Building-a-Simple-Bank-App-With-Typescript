interface Pessoa{
    nome: string,
    idade: number, 
    profissao?: string
}

const pessoa : Pessoa = { 
nome: "webster",
idade: 32
}

const outraPessoa: Pessoa = { 
    nome: 'Paulo',
    idade: 25, 
    profissao: 'Desenvolvedor'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNumber: number[] = [
    1,2,3
]

const arrayString: Array<string> =[
    '1','2','3'

]