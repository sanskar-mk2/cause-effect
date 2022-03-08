const lFName = ["Alice", "Hana", "Sikandar", "David", "Ram", "Alex"];
const lLName = ["Jones", "Dean", "Smith", "Pitt", "Cruise", "Khan"];
const lStreet = ["Downtown", "Uptown", "Avenue", "Complex", "Street", "Industrial Park"];
const lCity = ["Lucknow", "Washington", "Madrid", "Berlin", "Shanghai"];
const lState = ["Uttar Pradesh", "Ohio", "Florida", "Bavaria", "Wales"];
const lCountry = ["India", "China", "Russia", "Ukraine", "Cambodia"];

const people = new Array(20);
for (let i = 0; i < 20; i++) {
    people[i] = {
        "name": lFName[Math.floor(Math.random() * lFName.length)] + " " + lLName[Math.floor(Math.random() * lLName.length)],
        "street": Math.floor(Math.random() * lFName.length) + " " + lStreet[Math.floor(Math.random() * lStreet.length)],
        "city": lCity[Math.floor(Math.random() * lCity.length)],
        "state": lState[Math.floor(Math.random() * lState.length)],
        "country": lCountry[Math.floor(Math.random() * lCountry.length)],
        "telephone": String(Math.floor(Math.random() * 9999999999 + 1)),
        "birthday": Math.floor(Math.random() * 29) + "/" + Math.floor(Math.random() * 13)
    }
}

const populate = () => {
    for (let i = 0; i < 20; i++) {
        let el = document.createElement("div");
        let ce = document.createElement("div");
        let lnk = document.createElement("a");
        let st = new String();
        let cest = people[i]["name"];
        for (const [key, value] of Object.entries(people[i])) {
            st = `${st}<br>${key}: ${value}`;
        }
        ce.innerHTML = cest;
        el.innerHTML = st.substring(4, st.length);
        el.classList.add("people");
        if (i != 0) {
            el.classList.add("hidden");
        }
        el.id = `ce${i}`;
        ce.classList.add("ce");
        lnk.setAttribute("href", `#ce${i}`);
        lnk.setAttribute("onclick", "show(this)");
        lnk.appendChild(ce);
        document.getElementById("navi").appendChild(lnk);
        document.getElementById("people").appendChild(el);
    }
}

const show = (lnk) => {
    let lid = lnk.getAttribute("href");
    for (let i = 0; i < 20; i++) {
        document.getElementById(`ce${i}`).classList.add("hidden");
    }
    document.getElementById(lid.substring(1, lid.length)).classList.remove("hidden");
}