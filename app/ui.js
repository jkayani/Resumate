jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

    // Checks all the checkboxes for the Resume fields 
    $("input.enableDisable[type='checkbox']").each(function(){
		$(this).attr("checked", "checked");	
	});

    // Adds the chronological sort event for each relevant radio button,
    // i.e. anything with a name attribute with "sorting" in it
    $("input[name*='sorting']").each(function(){
        $(this).click(function(){

            // Each sorting option has a class in the format: resumeProp + " " + basis
            App.sortChronologically(

                // The resumeProp to sort
                $(this).attr("class").substring(
                    0, 
                    $(this).attr("class").indexOf(" ")
                ),

                // The sort order
                $(this).attr("value"),

                // The basis (startDate or endDate)
                $(this).attr("class").substring(
                    $(this).attr("class").indexOf(" ") + 1
                )
            );
        });
    });

    // Adds the preset selection event for the Resume preset dropdown
    $("select.presets").change(function(){

        // Pass the selected <option> tag's value
        App.selectPreset($(this).find("option:selected").attr("value"));
    });

    // Adds the font change event for the Resume font dropdown
    $("select.fonts").change(function(){

        // Pass the selected <option> tag's value
        App.changeFont($(this).find("option:selected").attr("value"));
    });

    // Adds the export to clipboard event for the checkbox
    $("input.exportClipboard").change(function(){

        // Remove trash cans for a copy and pastable Resume if selected
        if($(this).is(":checked")){
            Render.exportForClipboard();
        }
        else{
            Render.renderHTML(Resume);
        }
    });

});

