var func = []

for(var i = 0; i < 10; i++){
    func.push(function(){
        console.log('Dentro Array', i)
    })
}

func[2]()
func[8]()