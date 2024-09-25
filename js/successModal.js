function successModal(){
    document.getElementById('my_modal_1').showModal();
    document.getElementById('quota-modal-close').addEventListener('click', function(event)
            {
                event.preventDefault();
                console.log(event);
                document.getElementById('my_modal_1').close();
            });
}