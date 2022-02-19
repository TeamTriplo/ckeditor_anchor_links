alert('test');

CKEDITOR.plugins.add( 'anchor_link', {

    // Register the icons. They must match command names.
    icons: 'anchor_link',

    // The plugin initialization logic goes inside this method.
    init: function( editor ) {

        // Define the editor command that inserts a anchor_link.
        editor.addCommand( 'insertanchor_link', {

            // Define the function that will be fired when the command is executed.
            exec: function( editor ) {
                var now = new Date();

                // Insert the anchor_link into the document.
                editor.insertHtml( 'The current date and time is: <em>' + now.toString() + '</em>' );
            }
        });

        // Create the toolbar button that executes the above command.
        editor.ui.addButton( 'anchor_link', {
            label: 'Insert anchor_link',
            command: 'insertanchor_link',
            toolbar: 'insert'
        });
    }
});