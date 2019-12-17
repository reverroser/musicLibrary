const baseUrl = 'https://itunes.apple.com';

/**
 * This function does a GET request to the search endpoint
 * https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
 */
export function fetchSearch() {
    const data = {
        term: localStorage.getItem('term'),
        entity: localStorage.getItem('entity'),
        country: localStorage.getItem('country'),
        explicit: localStorage.getItem('explicit'),
        limit: localStorage.getItem('limit'),

    };

    $.ajax({
        url: `${baseUrl}/search`,
        type: 'GET',
        data,
        dataType: 'jsonp',
        success: ({ results }) => {
            // On success emits the results using a custom event and save the results on localStorage
            $(document).trigger('searchResults', [results]);
            localStorage.setItem('results', JSON.stringify(results));
        },
        error: (error) => {
            // On error emits the error using a custom event
            $(document).trigger('searchResultsError', [error]);
        }
    });
}
