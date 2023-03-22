window.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#fetchQuotesBtn").addEventListener("click", function() {

        // Get values from drop-downs
        const topicDropdown = document.querySelector("#topicSelection");
        const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
        const countDropdown = document.querySelector("#countSelection");
        const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

        // Get and display quotes
        fetchQuotes(selectedTopic, selectedCount);
    });
});

function fetchQuotes(topic, count) {
    // TODO: Modify to use XMLHttpRequest
    //document.querySelector("#quotes").innerHTML = html;

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.responseType = "json";
    //let topic = document.getElementById("topicSelection");
    //let count = document.getElementById("countSelection")
    let queryString = "topic=" + encodeURIComponent(topic) + "&count=" + encodeURIComponent(count);
    console.log(queryString);
    xhr.open("GET", "https://wp.zybooks.com/quotes.php?" + queryString);
    xhr.send();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
    let quoteInfo = document.getElementById("qutoes"); //Display quotes 
    if (this.status === 200 && !this.response.error) { //Valid request 

        let returnedData = this.response;

        let html = "<ol>";
        for (let c of returnedData) {
            //html += `<li>Quote ${c} - Anonymous</li>`;
            html += '<li>' + c.quote + ' - ' + c.source + '</li>';
        }
        html += "</ol>";
        quotes.innerHTML = html;

    } else {
        //quotes.innerHTML = "Topic " + selectedTopic + " not found";
        console.log(this.response.error);
        quotes.innerHTML = this.response.error;
    }
}