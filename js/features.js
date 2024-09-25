document.getElementById('btn-donation')
    .addEventListener('click', function(){
        showSectionById('donation-card-container');
        document.getElementById('btn-history').style.backgroundColor = '#f4f4f4';
        document.getElementById('btn-donation').style.backgroundColor = '#B4F461';
    })
document.getElementById('btn-history')
    .addEventListener('click', function(){
        showSectionById('history-container');
        document.getElementById('btn-donation').style.backgroundColor = '#f4f4f4';
        document.getElementById('btn-history').style.backgroundColor = '#B4F461';
    })

document.getElementById('btn-blog')
    .addEventListener('click', function(){
        window.location.href = 'blog.html';
    })

