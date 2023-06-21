export default class BudgetTracker {
    constructor(quetySelectorString) {
        this.root = document.querySelector(quetySelectorString);
        this.root.innerHTML = BudgetTracker.entryHtml();

        this.root.querySelector(".new-entry").addEventListener("click", () => {
            this.onNewEntryBtnClick();
        })

        // Load initial data from Local Storage
        this.load();
    }

    static html() {
        return `
        
        `;
    }

    static entryHtml() {

    }

    load() {

    }

    uppdateSummary() {

    }

    save() {

    }


    addEntry(entry = {}) {

    }

    getEntryRows() {
        
    }

    onNewEntryBtnClick() {
        
    }

    onDelateEntryBtnClick() {

    }

}