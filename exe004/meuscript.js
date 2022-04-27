function verificar(){
    var data = new Date()
    var anos = data.getFullYear()
    var ano = window.document.getElementById('ano')
    var anoo = Number(ano.value)
    var res = window.document.getElementById('res')
    var idade = anos - anoo
    var sex = window.document.getElementsByName('sex')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id.', 'foto')

    if(sex[0].checked){
        genero = 'Masculino'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagens/criançamenino.png')
        } else if(idade >= 10 && idade < 21){
            img.setAttribute('src', 'imagens/jovemhomem.png')
        } else if(idade >= 21 && idade < 50){
            img.setAttribute('src', 'imagens/homem.png')
        } else if(idade >= 50 && idade < 130){
            img.setAttribute('src', 'imagens/idoso.png')
        }
    } else if(sex[1].checked){
        genero = 'Feminino'
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/criançamenina.png')
        } else if (idade >= 10 && idade < 21){
            img.setAttribute('src', 'imagens/jovemfeminina.png')
        } else if(idade >= 21 && idade < 50){
            img.setAttribute('src', 'imagens/mulher.png')
        } else if(idade >= 50 && idade < 130){
            img.setAttribute('src', 'imagens/idosa.png')
        }
    }

    if(anoo == 0){
        window.alert('ERROR - Verifique os dados e tente novamente')
    } else if(anoo > anos){
        window.alert('O ano que você digitou é maior do que o ano atual')
    } else if(anoo < 1908){
        window.alert('O homem mais velho do mundo nasceu em 1909, digite corretamente o ano de seu nascimento! :)')
    } else if(anoo >= 1908){
        res.innerHTML = `Individou do sexo ${genero} com idade de ${idade} anos.`
        res.appendChild(img)
        img.style.paddingTop = '10px'
    }
    
    
}