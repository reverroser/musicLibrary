export function fetchSearch(data) {
    $.ajax({
        url: 'https://itunes.apple.com/search',
        type: 'GET',
        data,
        dataType: "jsonp",
        success: (data) => {
            // TODO emit the results
            console.log(data);
        },
        error: (error) => {
            // TODO emit the error
            console.log(error);
        }
    });
}