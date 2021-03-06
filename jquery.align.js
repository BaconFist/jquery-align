/*
Copyright 2013 Thomas Klose <speck@bratler.net>

This program ( jQuery Alignment Plugin ) is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

Dieses Programm ( jQuery Alignment Plugin ) ist Freie Software: Sie können es unter den Bedingungen
der GNU General Public License, wie von der Free Software Foundation,
Version 3 der Lizenz oder (nach Ihrer Option) jeder späteren
veröffentlichten Version, weiterverbreiten und/oder modifizieren.

Dieses Programm wird in der Hoffnung, dass es nützlich sein wird, aber
OHNE JEDE GEWÄHRLEISTUNG, bereitgestellt; sogar ohne die implizite
Gewährleistung der MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK.
Siehe die GNU General Public License für weitere Details.

Sie sollten eine Kopie der GNU General Public License zusammen mit diesem
Programm erhalten haben. Wenn nicht, siehe <http://www.gnu.org/licenses/>.
*/
/*
    Version 1.0.1
*/

jQuery.fn.extend({
    align: function(config){
        var settings = {
            parent: window,
            vertical: true,
            horizontal: true,
            minLeft: 0,
            minTop: 0
        };
        if(config != null){
            for(var key in config){
                settings[key] = config[key];
            }
        }
        
        if(settings.vertical || settings.horizontal) {
            var parent = jQuery(settings.parent);
            var childTop = null;
            var childLeft = null;
            var parentOffset = parent.offset();
            if(parentOffset == null){
                parentOffset = {top:0,left:0};
            }
            

            if(settings.vertical){
                var parentHeight = null;
                if(parent == jQuery(window) || parent == jQuery(document)){
                    parentHeight = parent.height();
                } else {
                    parentHeight = parent.innerHeight();
                }
                var childHeight = this.outerHeight(true);
                childTop = (parentHeight - childHeight) / 2;
                childTop = childTop + parentOffset.top;
                if(settings.minTop !== false && settings.minTop > childTop){
                    childTop = settings.minTop;
                }
            }
            
            if(settings.horizontal){
                var parentWidth = null;
                if(parent == jQuery(window) || parent == jQuery(document)){
                    parentWidth = parent.width();
                } else {
                    parentWidth = parent.innerWidth();
                }
                var childWidth = this.outerWidth(true);
                childLeft = (parentWidth - childWidth) / 2;
                childLeft = childLeft + parentOffset.left;
                if(settings.minLeft !== false && settings.minLeft > childLeft){
                    childLeft = settings.minLeft;
                }
            }

            this.css('position','fixed');
            if(childTop != null){
                this.css('top',childTop + 'px');
            }
            if(childLeft != null){
                this.css('left',childLeft + 'px');
            }
        }
        
        return this;
    }
});
