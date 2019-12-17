import { fetchSearch } from '../../utils/musicApi';

import './FilterBar.scss';

class FilterBar extends HTMLElement {
    constructor() {
        super();

        this.render();
        $('#entitySelector')[0].addEventListener('change', (event) => this.saveFilter(event, 'entity'));
        $('#countrySelector')[0].addEventListener('change', (event) => this.saveFilter(event, 'country'));
        $('#explicitSelector')[0].addEventListener('change', (event) => this.saveFilter(event, 'explicit'));
        $('#limitSelector')[0].addEventListener('change', (event) => this.saveFilter(event, 'limit'));

        this.initFilter();
    }

    // Keeping the last filter selection when refreshing the 
    initFilter() {
        $('#entitySelector')[0].value = localStorage.getItem('entity');
        $('#countrySelector')[0].value = localStorage.getItem('country');
        $('#explicitSelector')[0].value = localStorage.getItem('explicit');
        $('#limitSelector')[0].value = localStorage.getItem('limit');
    }


    // This sets to Local Storage the value of the selected option by type
    saveFilter(event, type) {
        localStorage.setItem(type, event.target.value);
        // Fetch the search
        fetchSearch();
    }

    render() {
        this.innerHTML = `
            <nav class="filter-bar navbar navbar-light bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <select class="form-control" id="entitySelector">
                                <option selected disabled>Entity</option>
                                <option value="song">Song</option>
                                <option value="artist">Artist</option>
                                <option value="album">Album</option>
                                <option value="musicVideo">Music Video</option>
                            </select>
                        </div>
                        <div class="col">
                            <select class="form-control" id="countrySelector">
                                <option selected disabled>Country</option>   
                                <option value="ES">Spain</option>
                                <option value="SE">Sweden</option>
                                <option value="UK">United Kingdom</option>
                                <option value="US">United States</option>
                            </select>
                        </div>
                        <div class="col">
                            <select class="form-control" id="explicitSelector">
                                <option selected disabled>Explicit content</option>
                                <option value="Yes">yes</option>
                                <option value="No">no</option>
                            </select>
                        </div>
                        <div class="col">
                            <select class="form-control" id="limitSelector">
                                <option selected disabled>Number of results</option>
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>

                    </div>
                </div>
            </nav>
        `;
    }
}

window.customElements.define('filter-bar', FilterBar);