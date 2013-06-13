#jQuery Alignment Plugin

Plugin to align an Element to another. 

##Features
- vertical align
- horizontal align (works most like `margin: 0 auto;`
- minimum Values for left an top position
- each element can be aligned to evey other element

##How to use

###align to window
```javascript
$("#some-element").align();
```

###align to another Element
```javascript
$("#some-element").align({'parent':'#the-parent'});
```

##auto-update on window-resize
```javascript
$(document).ready(function(){
    $(window).resize(function(){
        $("#some-element").align();        
    });
});
```

##Options
<table>
    <tr>
        <th>key</th><th>type</th><th>default</th><th>description</th>
    </tr>
    <tr>
        <td>parent</td><td>jQuery Selector</td><td>window</td><td>the Element where 'this' is aligned to</td>
    </tr>
    <tr>
        <td>vertical</td><td>boolean</td><td>true</td><td>enable/disable vertical alignment</td>
    </tr>
    <tr>
        <td>horizontal</td><td>boolean</td><td>true</td><td>enable/disable horizontal alignment</td>
    </tr>
    <tr>
        <td>minLeft</td><td>integer or false</td><td>0</td><td>minimum Left Offset of 'this'. (false disables this feature)</td>
    </tr>
    <tr>
        <td>minTop</td><td>integer or false</td><td>0</td><td>minimum Top Offset of 'this'. (false disables this feature)</td>
    </tr>
</table>

##Compatibility
this Version has been tested with jquery 2.0.1 only, but should work on earlier version as well.
