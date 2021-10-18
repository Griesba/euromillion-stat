
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "euromillions_4.csv", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var re = new RegExp(';-\d+-\d+-\d+-\d+-\d+-;-\d+-\d+-;', 'g');
                //var res = re.exec(allText);
                var res = allText.match(/;-\d+-\d+-\d+-\d+-\d+-;-\d+-\d+-;/g);
                var root = [];
                res.forEach(d => {
                    root.push(d.match(/\d+/g));
                });

                root = root.reduce((acc,val) => acc.concat(val), []);

                var result = root.reduce((acc, curr) => {
                    if(typeof acc[curr] == 'undefined') {
                        acc[curr] = 1;
                    } else {
                        acc[curr] +=1;
                    }
                    return acc;
                },{});

                console.log(result)

                console.log(Object.values(result));


            }
        }
    }
    rawFile.send(null);
