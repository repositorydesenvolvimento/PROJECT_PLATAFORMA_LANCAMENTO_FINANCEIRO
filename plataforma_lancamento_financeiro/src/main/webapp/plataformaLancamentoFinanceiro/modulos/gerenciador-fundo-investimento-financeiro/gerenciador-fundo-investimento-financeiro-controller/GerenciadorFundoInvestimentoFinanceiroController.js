class GerenciadorFundoInvestimentoFinanceiroController {

    // Responsavel por adicionar um modelo
    salvarInvestimentoFinanceiro(event) {

        event.preventDefault(); // responsavel por cancelar o comportamento padrao do formulario

        let instituicaoFinanceiraInput = document.querySelector('#instituicaoFinanceira');
        let nomeInvestimentoInput = document.querySelector('#nomeInvestimento');
        let tipoMercadoFinanceiroInput = document.querySelector('#tipoMercadoFinanceiro');
        let riscoInvestimentoInput = document.querySelector('#riscoInvestimento');
        let dataAquisicaoFundoInput = document.querySelector('#dataAquisicaoFundo');
        let validadeInvestimentoInput = document.querySelector('#validadeInvestimento');
        let valorInvestimentoInput = document.querySelector('#valorInvestimento');
        let percentualRendimentoPrevistoInput = document.querySelector('#percentualRendimentoPrevisto');
        
        console.log('Invocando controller...');

        console.log(instituicaoFinanceiraInput);
        console.log(nomeInvestimentoInput);
        console.log(tipoMercadoFinanceiroInput);

    }

}