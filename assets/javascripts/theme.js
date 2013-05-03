(function() {
    var incId = 1;
    $('ul').each(function() {
        var self = $(this),
            newBlock,
            blockId,
            started = false;
        if (self.children('li').children('h1').length <= 0) {
            return;
        }
        blockId = incId++;
        newBlock = $('<div class="accordion" id="accordion-' + blockId + '"></div>');
        self.children('li').each(function() {
            var item = $(this),
                itemId = incId++,
                group = $('<div class="accordion-group"></div>'),
                content = $('<div id="accordion-' + itemId + '" class="accordion-body collapse"></div>'),
                body = item.children().clone();
            group.append($('<div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion-' + blockId + '" href="#accordion-' + itemId + '" id="' + item.find('h1:first').attr('id') + '">' + item.find('h1:first').text() + '</a></div>'));
            group.append(content);
            content.append($('<div class="accordion-inner">').append(body));
            content.find('h1:first').remove();
            if (!started) {
                content.addClass('in');
                started = true;
            }
            newBlock.append(group);
        });
        self.replaceWith(newBlock);
    });

    $('pre code').each(function() {
        var self = $(this),
            code = self.text(),
            modalId = incId++,
            replacement = $('<pre class="prettyprint"></pre>').text(code),
            modal = $('<div id="modal-' + modalId + '" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button><h3>Code</h3></div><div class="modal-body"><textarea></textarea></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">Close</button></div></div>');
        self.parent().replaceWith(replacement);
        modal.find('textarea').text(code);
        replacement.after(modal);
        replacement.click(function() {
            modal.modal();
        });
    });

})()