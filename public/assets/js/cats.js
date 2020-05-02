$(function() {
    $(".change-adopt").on("click", function(event) {
        let id = $(this).data("id");
        let newAdopt = $(this).data("newadopt");

        let newAdoptState = {
            adoptable: newAdopt
        };

        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newAdoptState
        }).then(
            function() {
                console.log("changed adopt to", newAdopt);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        let newCat = {
            name: $("#ca").val().trim(),
            adoptable: $("[name=adoptable]:checked").val().trim()
        };

        $.ajax("/api/cats", {
            type: "POST",
            data: newCat
        }).then(
            function(){
                console.log("created new cat");
                location.reload();
            }
        );
    });

    $(".delete-cat").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/api/cats/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted cat", id);
                location.reload();
            }
        );
    });
});