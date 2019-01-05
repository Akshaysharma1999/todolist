$(()=>{

  let input =  $('#input')
  let tasks = []
  let count = 0

 function refreshlist()
 {
    let tasklist =  $('#tasklist').empty()
    for(let i in tasks)
    {
        let task = tasks[i]
        // task.attr('id',i)

        tasklist.append( 
             $('<li>')
            .attr('class','list-group-item')
            .append(
                $('<div>')
                .attr('class', task.done ?'row done' : 'row')
                .append(
                    $('<span>')
                    .attr('class','col-sm py-1')
                    .text(task.name)
         )

         .append(
             $('<button>')
             .attr('class', task.done ? "btn btn-primary col-sm-2 mx-2" : "btn btn-success col-sm-2 mx-2")
             .text( task.done ? "👍DONE" : "👎NOTDONE" )
             .click(function()
             {
                 task.done = !task.done
                 refreshlist()
             })
         )
            
         .append(
            $('<button>')
            .attr('class', "btn btn-danger col-sm-2 mx-2")
            .text( "💀DELETE" )
            .click(function()
            {
                count--
                tasks.splice(i,1)
                refreshlist()
            })
        )
         .append(

            (
                tasks[0]!=task ?

            $('<button>')
            .attr('class',"btn btn-warning col-sm-2 mx-2")
            .text( "👆🏻UP" )
            .click
            (
                function(event)
                {
                // console.log(event.target.parentElement.parentElement)
                // a.splice(3, 1 , a.splice(2,1,a[3])[0]);
                // console.log(tasks[i-1])
                
                tasks.splice(i, 1 , tasks.splice((i-1),1,tasks[i])[0])
                
                // let j = i-1
                // let temp = tasks[i] 
                // tasks[i] = tasks[j]
                // tasks[j] = temp
                
                // console.log(tasks[i-1])

                refreshlist()
                }
            )
            : $('')
            // :  $('<button>')
            // .attr('class',"btn btn-secondary col-2 mx-2")
            // .text( "👆🏻UP" )

            )

        )
        
        .append(
           
            // a.splice(3, 1 , a.splice(2,1,a[3])[0]);
            (
                tasks[count-1]!=task ?

            $('<button>')
            .attr('class', "btn btn-info col-sm-2 mx-2")
            .text(  "👇🏻DOWN" )
            .click
            (
                function(event)
                {
                    let x = i-1
                    tasks.splice(x+1, 1 , tasks.splice((x+2),1,tasks[x+1])[0])

                // let x = i-1
                // let temp1 = tasks[x+2]
                // tasks[x+2] = tasks[x+1]
                // tasks[x+1] = temp1

                refreshlist()
                }
            )
            : $('')
            // :  $('<button>')
            // .attr('class', "btn btn-secondary col-2 mx-2")
            // .text(  "👇🏻DOWN" )
        )
        )

         )
        //  .append('<br>')
        )
      .append('<br>')
      
    }
 }



refreshlist()

function addtask() {
    count++
    // console.log(tasks)
    let taskName = input.val()
    tasks.push({
      name: taskName,
      done: false
    })
    input.val('')
    refreshlist()
  }

  function sortli(){
    tasks.sort(function (a, b) {
        return a.done - b.done
      })
      refreshlist()
  }

  function clearli()
  {
    for(let i in tasks)
    {
        if(tasks[i].done)
        {
            count--
        }
    }

    tasks = tasks.filter(function(r){
        return !r.done
    }) 
   
    refreshlist()
  }

  $('#addbtn').click(function()
  {
      addtask()
  } ) 

  input.keyup ( function (ev) {
      if (ev.keyCode == 13) {
        addtask()
      }
    })
  

  $('#sortbtn').click (function()
  {
      sortli()
  } )

  $('#clearbtn').click (function()
  {
      clearli()
  } )

})