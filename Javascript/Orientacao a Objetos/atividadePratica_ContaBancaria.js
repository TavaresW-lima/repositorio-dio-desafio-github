class ContaBancaria {
    agencia;
    numero;
    tipo;
    _saldo;

    constructor(
        tipo = 'conta',
        saldo = 0,
        agencia = null,
        numero = null
    ) {
        this.saldo = saldo;
        this.tipo = tipo;
        this.agencia = agencia;
        this.numero = numero;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    sacar(valor) {
        if(valor > this.saldo) {
            console.log(`Saldo insuficiente na ${this.tipo} ${this.agencia + '/' + this.numero}.`);
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado na ${this.tipo} ${this.agencia + '/' + this.numero}. Saldo atual: R$${this.saldo}`);
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado na ${this.tipo} ${this.agencia + '/' + this.numero}. Saldo atual: R$${this.saldo}`);
    }
}

class ContaCorrente extends ContaBancaria {

    _cartaoCredito;

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(cartao) {
        this._cartaoCredito = cartao;
    }

    constructor(
        saldo = 0,
        agencia = null, 
        numero = null
    ) {
        super('conta corrente', saldo, agencia, numero);
    }   
}

class ContaPoupanca extends ContaBancaria {
    constructor(
        saldo = 0,
        agencia = null,
        numero = null
    ) {
        super('conta poupanca',saldo, agencia, numero);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(
        saldo = 0,
        agencia = null,
        numero = null
    ) {
        super('conta universitaria', saldo, agencia, numero);
    }

    sacar(valor) {
        if(valor > 500) {
            console.log('Esta é uma conta universitária, o valor máximo para o saque é até R$500,00');
            return;
        }
        super.sacar(valor);
    }
}