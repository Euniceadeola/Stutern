/*1.  Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
    *   Handle of author
    *   content, 
    *   An image link posted by the author of the post
    *   Number of views, 
    *   Number of likes, */

    function InstagramPost(HandleOfAuthor, content, ImageLink, NumOfViews, NumOfLikes) { 
    this.HandleOfAuthor = HandleOfAuthor; 
    this.content = content; 
    this.ImageLink = ImageLink; 
    this.NumOfViews = NumOfViews; 
    this.NumOfLikes = NumOfLikes; 
  } 

/*2.  Create 2 Instagram post objects from the constructor function you created above */

let HandleOfAuthor = new InstagramPost('Eunice Adeola'); 
 let ImageLink = new InstagramPost('https://instagram.com/p/B4smVqahZwp/?utm_source=ig_web_copy_link') 

/*3.  Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
    * ENG - 70
    * GOVT - 85
    * LIT - 82
    * CRK - 94

    a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
    b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above */

    /*3a*/
    function CreatePerson(name, age, location) { 
        return { 
            name: name, 
            age: age, 
            location: location, 
        }; 
      } 
        
      const musa = CreatePerson("Musa Dawudu", 19, "Lagos",); 
      console.log(musa); 
      /*3b*/
      function JambScores(eng, govt, lit,crk) { 
        return { 
            eng: eng, 
            govt: govt, 
            lit: lit, 
            crk: crk, 
        }; 
      } 
     
      const MusaJambScore = JambScores(70, 85, 82, 94); 
      console.log(MusaJambScore); 
     
      musa.Scores = MusaJambScore 
      console.log(musa) 
    
/*4.  What are the different ways you can clone an object? Give examples for each of them. */
// 1. Using Spread
//     Using spread will clone your object. Note this will be a shallow copy. As of this post, the spread operator for cloning objects is in Stage 4. So it's not officially in the specifications yet. So if you were to use this, you would need to compile it with Babel (or something similar).

    const food = { beef: '🥩', bacon: '🥓' };

    const cloneFood = { ...food };

    console.log(cloneFood);
2. Using Object.assign
    Alternatively, Object.assign is in the official released and will also create a shallow copy of the object.

    const food = { beef: '🥩', bacon: '🥓' };

    const cloneFood = Object.assign({}, food);

    console.log(cloneFood);

    Note the empty {} as the first argument, this will ensure you don't mutate the original object 👍

#3. Using JSON
    This final way will give you a deep copy. Now I will mention, this is a quick and dirty way of deep cloning an object. For a more robust solution, I would recommend using something like lodash

    const food = { beef: '🥩', bacon: '🥓' };

    const cloneFood = JSON.parse(JSON.stringify(food));

    console.log(cloneFood);


/*5.  As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates: 
  const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}


Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’ */
    const presidentialCandidates = { 
        AAC: 'Omoyele Sowore', 
        ACCORD: 'Christopher Imumolen', 
        APC: 'Bola Ahmed Tinubu', 
        LP: 'Peter Obi', 
        NNPP: 'Rabiu Kwankwaso', 
        PDP: 'Atiku Abubakar', 
     } 
     for (const value in presidentialCandidates) { 
       console.log(presidentialCandidates[value] + 'is the presidential candidate of ' + value)    
    } 