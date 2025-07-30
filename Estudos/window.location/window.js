// comando padrao windw.location redireciona voce para outra pagina e permite que voce possa voltar
window.location = "https://www.google.com";

//os dois comandos faz a mesma coisa

// comando padrao windw.location.href redireciona voce para outra pagina e permite que voce possa voltar
window.location.href = "https://www.google.com";


// tambem temos o redirecionamento com o camando replace
// esse comando substitui a pagina atual por outra, ou seja, nao permite que voce volte

window.location.replace("https://www.google.com");


// tambem podemos usar o comando assign
// esse comando redireciona voce para outra pagina e permite que voce possa voltar  
window.location.assign("https://www.google.com");


// podemos usar o comando reload para recarregar a pagina atual
window.location.reload();   
// podemos usar o comando reload com um parametro true para forçar o recarregamento da pagina
window.location.reload(true); // forçar recarregamento da pagina


// tambem temos o comando window.location.history
// esse comando permite que voce possa navegar entre as paginas visitadas       

// exemplo de uso do comando history
window.history.back(); // volta para a pagina anterior
window.history.forward(); // avança para a pagina seguinte
window.history.go(-1); // volta para a pagina anterior
window.history.go(1); // avança para a pagina seguinte
window.history.go(0); // recarrega a pagina atual