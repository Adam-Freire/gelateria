import './style.css'

export default function Topo() {
    return(
        <footer className="rodape">
            <div className="rodape-conteudo limitar-secao">
                <img src="/assets/logo.png" />
                <div className= "rodape-conteudo-escrito">
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>    
                </div>

                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="adam">
                <p>Gelateria. Desenvolvido por - Adam Freire</p>
            </div>
            
        </footer>
    )
}