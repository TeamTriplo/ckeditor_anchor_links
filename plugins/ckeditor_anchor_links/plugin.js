CKEDITOR.plugins.add( 'ckeditor_anchor_links', {

    // Register the icons. They must match command names.
    icons: 'ckeditor_anchor_links',

    // The plugin initialization logic goes inside this method.
    init: function( editor ) {
        // Define the editor command that inserts a anchor_link.
        editor.addCommand( 'ckeditor_anchor_links', {

            // Define the function that will be fired when the command is executed.
            exec: function( editor ) {
                var now = new Date();
                console.log('here');
                // Insert the anchor_link into the document.
                editor.insertHtml( 'The current date and time is: <em>' + now.toString() + '</em>' );
            }
        });

        // Create the toolbar button that executes the above command.
        editor.ui.addButton( 'CkeditorAnchorLinks', {
            label: 'Insert anchor_link',
            command: 'ckeditor_anchor_links',
            toolbar: 'insert'
        });
    }
});
