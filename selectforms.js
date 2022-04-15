var Select_List_Data = {
    'choices': { // name of associated select box
        
        // names match option values in controlling select box
        tier1: {
            text: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', '+16', '+17', '+18', '+19', '+20'],
            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
        },
        tier2: {
            text: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', '+16', '+17', '+18', '+19', '+20'],
            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
        },
        tier3L: {
            text: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15'],
            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
        },
        tier3M: {
            text: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', '+16', '+17', '+18', '+19', '+20'],
            value: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
        }
    }    
};

// removes all option elements in select box 
// removeGrp (optional) boolean to remove optgroups
function removeAllOptions(sel, removeGrp) {
    var len, groups, par;
    if (removeGrp) {
        groups = sel.getElementsByTagName('optgroup');
        len = groups.length;
        for (var i=len; i; i--) {
            sel.removeChild( groups[i-1] );
        }
    }
    
    len = sel.options.length;
    for (var i=len; i; i--) {
        par = sel.options[i-1].parentNode;
        par.removeChild( sel.options[i-1] );
    }
}

function appendDataToSelect(sel, obj) {
    var f = document.createDocumentFragment();
    var labels = [], group, opts;
    
    function addOptions(obj) {
        var f = document.createDocumentFragment();
        var o;
        
        for (var i=0, len=obj.text.length; i<len; i++) {
            o = document.createElement('option');
            o.appendChild( document.createTextNode( obj.text[i] ) );
            
            if ( obj.value ) {
                o.value = obj.value[i];
            }
            
            f.appendChild(o);
        }
        return f;
    }
    
    if ( obj.text ) {
        opts = addOptions(obj);
        f.appendChild(opts);
    } else {
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty(prop) ) {
                labels.push(prop);
            }
        }
        
        for (var i=0, len=labels.length; i<len; i++) {
            group = document.createElement('optgroup');
            group.label = labels[i];
            f.appendChild(group);
            opts = addOptions(obj[ labels[i] ] );
            group.appendChild(opts);
        }
    }
    sel.appendChild(f);
}

// anonymous function assigned to onchange event of controlling select box
document.forms['gearlevel'].elements['tier'].onchange = function(e) {
    // name of associated select box
    var relName = 'choices';
    
    // reference to associated select box 
    var relList = this.form.elements[ relName ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var obj = Select_List_Data[ relName ][ this.value ];

    // remove current option elements
    removeAllOptions(relList, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relList, obj);

    copyAllSelection();
};

document.forms['gearlevel'].elements['head_start'].onchange = function(e) {
    // The form being changed so I can copy paste to the other functions
    let start_name = 'head_start';
    let end_name = 'head_end';

    // Temporary variables that is only used to maintain current 'end' value if end value is greater than new start value
    let start = parseInt(document.getElementById(start_name).value);
    let end = parseInt(document.getElementById(end_name).value);
    let temp_end = document.getElementById(end_name).value;

    // Remove all options from end select
    removeAllOptions(this.form.elements[end_name]);

    // Declaration and initialization of variable to point at list of objects that contain the appropriate arrays
    let obj = Select_List_Data['choices'][document.forms['gearlevel'].elements['tier'].value];
    // Declaration of second variable to copy previous variable with the invalid options cut off
    let obj_copy = {};
    obj_copy.text = [];
    obj_copy.value = [];

    // Goes from current point of start of array of start select form to end of end of select form
    for (let i = this.value; i <= this.length - 1; i++) {
        obj_copy.text.push(obj.text[i]);
        obj_copy.value.push(obj.value[i]);
    }

    // Add all options to end select
    appendDataToSelect(this.form.elements[end_name], obj_copy);

    // If the old end value is greater than the new start value, re-set old end value (just preference)
    if (start < end) {
        document.getElementById(end_name).value = temp_end;
    }
};

document.forms['gearlevel'].elements['shoulders_start'].onchange = function(e) {
    // The form being changed so I can copy paste to the other functions
    let start_name = 'shoulders_start';
    let end_name = 'shoulders_end';

    // Temporary variables that is only used to maintain current 'end' value if end value is greater than new start value
    let start = parseInt(document.getElementById(start_name).value);
    let end = parseInt(document.getElementById(end_name).value);
    let temp_end = document.getElementById(end_name).value;

    // Remove all options from end select
    removeAllOptions(this.form.elements[end_name]);

    // Declaration and initialization of variable to point at list of objects that contain the appropriate arrays
    let obj = Select_List_Data['choices'][document.forms['gearlevel'].elements['tier'].value];
    // Declaration of second variable to copy previous variable with the invalid options cut off
    let obj_copy = {};
    obj_copy.text = [];
    obj_copy.value = [];

    // Goes from current point of start of array of start select form to end of end of select form
    for (let i = this.value; i <= this.length - 1; i++) {
        obj_copy.text.push(obj.text[i]);
        obj_copy.value.push(obj.value[i]);
    }

    // Add all options to end select
    appendDataToSelect(this.form.elements[end_name], obj_copy);

    // If the old end value is greater than the new start value, re-set old end value (just preference)
    if (start < end) {
        document.getElementById(end_name).value = temp_end;
    }
};

document.forms['gearlevel'].elements['chest_start'].onchange = function(e) {
    // The form being changed so I can copy paste to the other functions
    let start_name = 'chest_start';
    let end_name = 'chest_end';

    // Temporary variables that is only used to maintain current 'end' value if end value is greater than new start value
    let start = parseInt(document.getElementById(start_name).value);
    let end = parseInt(document.getElementById(end_name).value);
    let temp_end = document.getElementById(end_name).value;

    // Remove all options from end select
    removeAllOptions(this.form.elements[end_name]);

    // Declaration and initialization of variable to point at list of objects that contain the appropriate arrays
    let obj = Select_List_Data['choices'][document.forms['gearlevel'].elements['tier'].value];
    // Declaration of second variable to copy previous variable with the invalid options cut off
    let obj_copy = {};
    obj_copy.text = [];
    obj_copy.value = [];

    // Goes from current point of start of array of start select form to end of end of select form
    for (let i = this.value; i <= this.length - 1; i++) {
        obj_copy.text.push(obj.text[i]);
        obj_copy.value.push(obj.value[i]);
    }

    // Add all options to end select
    appendDataToSelect(this.form.elements[end_name], obj_copy);

    // If the old end value is greater than the new start value, re-set old end value (just preference)
    if (start < end) {
        document.getElementById(end_name).value = temp_end;
    }
};

document.forms['gearlevel'].elements['hands_start'].onchange = function(e) {
    // The form being changed so I can copy paste to the other functions
    let start_name = 'hands_start';
    let end_name = 'hands_end';

    // Temporary variables that is only used to maintain current 'end' value if end value is greater than new start value
    let start = parseInt(document.getElementById(start_name).value);
    let end = parseInt(document.getElementById(end_name).value);
    let temp_end = document.getElementById(end_name).value;

    // Remove all options from end select
    removeAllOptions(this.form.elements[end_name]);

    // Declaration and initialization of variable to point at list of objects that contain the appropriate arrays
    let obj = Select_List_Data['choices'][document.forms['gearlevel'].elements['tier'].value];
    // Declaration of second variable to copy previous variable with the invalid options cut off
    let obj_copy = {};
    obj_copy.text = [];
    obj_copy.value = [];

    // Goes from current point of start of array of start select form to end of end of select form
    for (let i = this.value; i <= this.length - 1; i++) {
        obj_copy.text.push(obj.text[i]);
        obj_copy.value.push(obj.value[i]);
    }

    // Add all options to end select
    appendDataToSelect(this.form.elements[end_name], obj_copy);

    // If the old end value is greater than the new start value, re-set old end value (just preference)
    if (start < end) {
        document.getElementById(end_name).value = temp_end;
    }
};

document.forms['gearlevel'].elements['legs_start'].onchange = function(e) {
    // The form being changed so I can copy paste to the other functions
    let start_name = 'legs_start';
    let end_name = 'legs_end';

    // Temporary variables that is only used to maintain current 'end' value if end value is greater than new start value
    let start = parseInt(document.getElementById(start_name).value);
    let end = parseInt(document.getElementById(end_name).value);
    let temp_end = document.getElementById(end_name).value;

    // Remove all options from end select
    removeAllOptions(this.form.elements[end_name]);

    // Declaration and initialization of variable to point at list of objects that contain the appropriate arrays
    let obj = Select_List_Data['choices'][document.forms['gearlevel'].elements['tier'].value];
    // Declaration of second variable to copy previous variable with the invalid options cut off
    let obj_copy = {};
    obj_copy.text = [];
    obj_copy.value = [];

    // Goes from current point of start of array of start select form to end of end of select form
    for (let i = this.value; i <= this.length - 1; i++) {
        obj_copy.text.push(obj.text[i]);
        obj_copy.value.push(obj.value[i]);
    }

    // Add all options to end select
    appendDataToSelect(this.form.elements[end_name], obj_copy);

    // If the old end value is greater than the new start value, re-set old end value (just preference)
    if (start < end) {
        document.getElementById(end_name).value = temp_end;
    }
};

document.forms['gearlevel'].elements['weapon_start'].onchange = function(e) {
    // The form being changed so I can copy paste to the other functions
    let start_name = 'weapon_start';
    let end_name = 'weapon_end';

    // Temporary variables that is only used to maintain current 'end' value if end value is greater than new start value
    let start = parseInt(document.getElementById(start_name).value);
    let end = parseInt(document.getElementById(end_name).value);
    let temp_end = document.getElementById(end_name).value;

    // Remove all options from end select
    removeAllOptions(this.form.elements[end_name]);

    // Declaration and initialization of variable to point at list of objects that contain the appropriate arrays
    let obj = Select_List_Data['choices'][document.forms['gearlevel'].elements['tier'].value];
    // Declaration of second variable to copy previous variable with the invalid options cut off
    let obj_copy = {};
    obj_copy.text = [];
    obj_copy.value = [];

    // Goes from current point of start of array of start select form to end of end of select form
    for (let i = this.value; i <= this.length - 1; i++) {
        obj_copy.text.push(obj.text[i]);
        obj_copy.value.push(obj.value[i]);
    }

    // Add all options to end select
    appendDataToSelect(this.form.elements[end_name], obj_copy);

    // If the old end value is greater than the new start value, re-set old end value (just preference)
    if (start < end) {
        document.getElementById(end_name).value = temp_end;
    }
};

// populate associated select box as page loads
(function() { // immediate function to avoid globals
    
    var form = document.forms['gearlevel'];
    
    // reference to controlling select box
    var sel = form.elements['tier'];
    sel.selectedIndex = 0;
    
    // name of associated select box
    var relName = 'choices';
    // reference to associated select box
    var rel = form.elements[ relName ];
    
    // get data for associated select box passing its name
    // and value of selected in controlling select box
    var data = Select_List_Data[ relName ][ sel.value ];
    
    // add options to associated select box
    appendDataToSelect(rel, data); 

    copyAllSelection();
}());

function copyAllSelection() {
    var root = document.getElementById("choices");
    choices.value = 5;
    
    head_start.innerHTML = root.innerHTML;
    head_end.innerHTML = root.innerHTML;
    shoulders_start.innerHTML = root.innerHTML;
    shoulders_end.innerHTML = root.innerHTML;
    chest_start.innerHTML = root.innerHTML;
    chest_end.innerHTML = root.innerHTML;
    hands_start.innerHTML = root.innerHTML;
    hands_end.innerHTML = root.innerHTML;
    legs_start.innerHTML = root.innerHTML;
    legs_end.innerHTML = root.innerHTML;
    weapon_start.innerHTML = root.innerHTML;
    weapon_end.innerHTML = root.innerHTML;
};