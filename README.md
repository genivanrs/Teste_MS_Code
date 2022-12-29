<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>
            Pesquisa de Satisfação Moveis Simonetti
        </title>
        <link href="style.css" rel="stylesheet" type="text/css" />

    </head>

    <body id="corpo">        
        <h1 id="titulo">Pesquisa de Satisfação</h1>
        <h2 id="titulo2">Deixe-nos a sua opnião de como foi a sua experiencia ao comprar conosco, sua opnião e muito importante para nós....</h2>                
        <form>
            <ul class="flex-outer">
                <li>
                    <label for="first-name">Nome</label>
                    <input type="text" id="first-name" placeholder="Digite seu nome"><p></p>
                </li>             
                <li>
                    <label for="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail"><p></p>
                </li>
                
                <li>
                    <label for="phone">Telefone</label>
                    <input type="tel" id="phone" placeholder="Digite seu telefone"><p></p>
                </li> 
                
                <li>
                    <label for="data">Data de Nascimento:</label> 
                    <input type="date" name="nascimento" id="data"><p></p>
                </li>

                <label><p></p>Sexo:
                    <input name="masc" type="radio" value="masculino" />Masculino
                </label>
                <label>
                    <input name="fem" type="radio" value="feminino" />Feminino<br>
                </label>
                <label><p></p>Estado:
                    <select name="estado" id="estado">
                        <option>ES</option>                            
                        <option>MG</option>
                        <option>BA</option>                       
                        
                    </select><br>                  
                </label>
                <label><p></p>Você comprou recentemente em nossas lojas?<br>
                    <input type="checkbox" name="bike"> Sim 
                    <input type="checkbox" name="car"> Não
                </label><p></p>             
                <li>
                    <label for="message">Sugestão</label>
                    <textarea rows="6" id="message" placeholder="Deixe-nos sua sugestão:"></textarea>
                </li>
                <li>
                    <button type="submit">Enviar</button><br>
                </li>            
                
            </ul>
            <div class="imagem">           
                <img src="Logo.png" id="logo">
            </div>
        </form>
    
    </body>
</html>   
              
