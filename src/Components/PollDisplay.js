import React, {useState} from "react"

var sampleData = {

        "question": "What is your favorite programming language?",
      
        "choices": [
      
          { "id": 1, "label": "JavaScript", "votes": 0 },
      
          { "id": 2, "label": "Python", "votes": 0 },
      
          { "id": 3, "label": "Java", "votes": 0 },
      
          { "id": 4, "label": "C#", "votes": 0 }
      
        ]
}


export default function PollDisplay(){


    return(
        <>
            <h2>{sampleData.question}</h2>
            <br/>

            <input type="radio" id={sampleData.choices[0].id+""} name="fav_language" value={sampleData.choices[0].label+""}/>
            <label for={sampleData.choices[0].label+""}>{sampleData.choices[0].label+""}</label><br/>

            <input type="radio" id={sampleData.choices[1].id+""} name="fav_language" value={sampleData.choices[1].label+""}/>
            <label for={sampleData.choices[1].label+""}>{sampleData.choices[1].label+""}</label><br/>

            <input type="radio" id={sampleData.choices[2].id+""} name="fav_language" value={sampleData.choices[2].label+""}/>
            <label for={sampleData.choices[2].label+""}>{sampleData.choices[2].label+""}</label><br/>

            <input type="radio" id={sampleData.choices[3].id+""} name="fav_language" value={sampleData.choices[3].label+""}/>
            <label for={sampleData.choices[3].label+""}>{sampleData.choices[3].label+""}</label><br/>
            
            {/* <input type="radio" id={sampleData.choices[2].id+""} name="fav_language" value={sampleData.choices[2].label}/>
            <label for={sampleData.choices[2].label}>{sampleData.choices[2].label}</label><br/>
            <input type="radio" id={sampleData.choices[3].id+""} name="fav_language" value={sampleData.choices[3].label}/>
            <label for={sampleData.choices[3].label}>{sampleData.choices[3].label}</label><br/>
            <input type="radio" id={sampleData.choices[4].id+""} name="fav_language" value={sampleData.choices[4].label}/>  
            <label for={sampleData.choices[4].label}>{sampleData.choices[4].label}</label><br/>
             */}
        </>
    )
}