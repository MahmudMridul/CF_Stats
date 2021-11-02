
fetch('https://codeforces.com/api/user.status?handle=Abdullah_Al_Mahmud')
.then
(
    data =>  
    {
        return data.json();
    }
)
.then
(
    completeData =>
    {
        const element = document.getElementById("content");
        const rating_subs = 
        {
            800 : 0, 900 : 0, 1000 : 0, 1100 : 0, 1200 : 0, 1300 : 0,
            1400 : 0, 1500 : 0, 1600 : 0, 1700 : 0, 1800 : 0, 1900 : 0,
            2000 : 0, 2100 : 0, 2200 : 0, 2300 : 0, 2400 : 0, 2500 : 0, 
            2600 : 0, 2700 : 0, 2800 : 0, 2900 : 0, 3000 : 0, 3100 : 0,
            3200 : 0, 3300 : 0, 3400 : 0, 3500 : 0
        };

        submissions = Object.entries(completeData.result);
        let count = 0;

        let get_handle = submissions[0][1]['author']['members'][0];
        let handle = get_handle['handle'];

        element.innerHTML += "User: " + handle + "<br><br><br>";

        for(let i = 0; i<submissions.length; ++i)
        {
            if(submissions[i][1]['verdict'] == 'OK') 
            { 
                ++count; 
                let rating = submissions[i][1]['problem']['rating']; 
                ++rating_subs[rating]; 
            } 
        }

        element.innerHTML += "Total Solved: " + count + "<br><br><br>"; 

        element.innerHTML += "Rating" + " " + "Solved" + "<br><br>";


        for(let rating = 800; rating<=3500; rating += 100)
        {
            if(rating_subs[rating] > 0)
            {
                element.innerHTML += rating + " :  " + rating_subs[rating] + "<br>";
            }
        }

        console.log(count);
        console.log(rating_subs);
         
    }
)