
/*! JFS - v1.4.5 - 2022/01/04 */
(function(window,undefined) {
    "use strict";
    
    // JFS CONSTANTS
    var LIB_LOADING_DELAY = 500;
    var MAXIMUM_GROUP_ITEMS = 500;
    var BLANK_FILENAME = "blank.html";
    var HTML5_FIELD_TYPES = [ "search", "number", "range", "color", "tel", "url", "email", "month", "week", "time", "date", "datetime", "datetime-local" ];
    var TEXT_FIELD_TYPES = [ "text", "password", "hidden", "search", "range", "color", "tel", "url", "email", "month", "week", "time" ];
    var SELECT_FIELD_TYPES = [ "select", "radio", "checkbox" ];
    var INTERFACE_TYPES = [ "standard", "touch" ];
    var DEFAULT_FORM_OPTION = {
            NoValidate: false,
            UseHtml5Required: false,
            AutoComplete: true,
            IncludeAutoCompleteTrigger: false,
            LabelPosition: "above",
            LabelSuffix: ":",
            LabelRequiredString: "<span class='jfs_required_label'>*</span>",
            LabelRequiredPrepend: false,
            OptionLabelPosition: "right",
            FieldButtonPosition: "right",
            IconLabelPosition: "right",
            InlineOptions: true,
            InfoBubbleIcon: "",
            RepeatableGroupIcons: {},
            Interface: INTERFACE_TYPES[0],
            ExcludeFormTags: false,
            AddZeroedTabIndexes: true,
            ResetPageTabIndexes: false,
            CustomFields: {},
            CustomContainers: {},
            CustomInputOptions: {},
            Functions: {}
        };
        
    var KEY = {
            item: "i",
            field_sets: "sets",
            legend: "lg",
            fields: "fs",
            field: "f",
            key: "k",
            show: "s",
            type: "t",
            label: "l",
            title: "ttl",
            disabled: "d",
            placeholder: "p",
            autofocus: "a",
            autocomplete: "c",
            label_position: "lp",
            mods: "m",
            mods_group_fields: "mgf",
            value: "v",
            field_value: "fv",
            options: "os",
            options_predefined: "osp",
            inline: "in",
            option_label_position: "olp",
            control_btns: "cbts",
            interactions: "ints",
            detections: "dets",
            detect: "det",
            bool_operator: "bop",
            values: "vs",
            actions: "acts",
            actions_true: "actst",
            actions_false: "actsf",
            action: "act",
            target: "tgt",
            params: "prms",
            param: "prm",
            field_btns: "fbts"
        };
        
    var XML_KEY = {
            root: "jfs",
            vals: "values"
        };
        
    var MOD = {
            Req: "required",
            ReqPrepend: "requiredprepend",
            ReqCustom: "requiredcustom",
            LabelSuffix: "labelsuffix",
            AddClass: "addclass",
            AddClassToPair: "addclasstopair",
            AddClassToLabelContainer: "addclasstolabelcont",
            AddClassToLabel: "addclasstolabel",
            AddClassToFieldContainer: "addclasstofieldcont",
            AddClassToField: "addclasstofield",
            AddDataAttrs: "adddataattributes",
            Length: "length",
            Min: "min",
            Max: "max",
            Count: "count",
            Status: "status",
            AllowChars: "allowchars",
            PreventChars: "preventchars",
            CharCounter: "charcounter",
            WordCounter: "wordcounter",
            AugmentBtns: "augmentbuttons",
            AugmentHtml: "augmenthtml",
            ButtonText: "btn_text",
            ButtonTitle: "btn_title",
            ButtonPosition: "btn_position",
            ButtonIcon: "btn_icon",
            ButtonIconLabelPosition: "btn_icon_label_position",
            ButtonFunction: "btn_function",
            ButtonFunctionParam: "btn_function_param",
            WidthFillWrap: "widthfillwrap",
            InfoBub: "infobubble"
        };
        
    var CLS = {
            Container: "jfs_cont",
            Interface_Prefix: "jfs_int_",
            Form: "jfs_form",
            Set: "jfs_set",
            Pair: "jfs_pair",
            Label: "jfs_lbl",
            Field: "jfs_fld",
            Group: "jfs_grp",
            KeyPrefix: "jfs_key_",
            FieldWrap: "jfs_fld_wrap",
            Btn: "jfs_btn",
            AugmentBtn: "jfs_aug_btn",
            AugmentHtml: "jfs_aug_html",
            AugmentHtmlAbove: "jfs_aug_html_above",
            AugmentHtmlBelow: "jfs_aug_html_below",
            AugmentHtmlLabelAbove: "jfs_aug_html_label_above",
            AugmentHtmlLabelBelow: "jfs_aug_html_label_below",
            AugmentHtmlFieldAbove: "jfs_aug_html_field_above",
            AugmentHtmlFieldBelow: "jfs_aug_html_field_below",
            RadioLabel: "jfs_rdo_lbl",
            CheckboxLabel: "jfs_cb_lbl",
            FieldTypePrefix: "jfs_fldtype_",
            ContainsSetPrefix: "jfs_ctnsset_",
            ContainsFieldPrefix: "jfs_ctnsfld_",
            ContainsGroup: "jfs_ctnsgrp",
            LabelPositionPrefix: "jfs_lblpos_",
            ContainsHiddenField: "jfs_ctnshidden",
			ContainsHtmlField: "jfs_ctnshtml",
            Unshown: "jfs_unshown",
            HasFocus: "jfs_has_focus",
            InlineOpt: "jfs_inline_option",
            BlockOpt: "jfs_block_option",
            InfoBub: "jfs_infobubble",
            Date: "jfs_date",
            DateTime: "jfs_datetime",
            DateTimeLocal: "jfs_datetime_local",
            CharCounter: "jfs_charcounter",
            WordCounter: "jfs_wordcounter",
            CharCounterText: "jfs_charcounter_text",
            WordCounterText: "jfs_wordcounter_text",
            RepGrpSets: "jfs_repgrp_sets",
            RepGrpBtns: "jfs_repgrp_btns",
            RepGrpCtrlBtns: "jfs_repgrp_ctrl_btns",
            RepGrpBtn: "jfs_repgrp_btn",
            InRepGrp: "jfs_in_repgrp",
            AutoCompleteTriggerButton: "jfs_trigger_autocomplete"
        };
        
    var ATTR = {
            Disabled: "disabled=\"disabled\"",
            Selected: "selected=\"selected\"",
            Checked: "checked=\"checked\"",
            Required: "required=\"required\"",
            AutoFocus: "autofocus=\"autofocus\"",
            AutoComplete: "autocomplete",
            PlaceHolder: "placeholder",
            MaxLength: "maxlength",
            Title: "title",
            DATA_FormKeys: "jfs_formkeys",
            DATA_FieldName: "jfs_fieldname",
            DATA_ShowStatus: "jfs_showstatus",
            DATA_MinLength: "jfs_minlength",
            DATA_AllowChars: "jfs_allowchars",
            DATA_PreventChars: "jfs_preventchars",
            DATA_BtnFunct: "jfs_btn_function",
            DATA_BtnFunctParam: "jfs_btn_function_param",
            DATA_DTPicker: "jfs_dtpicker",
            DATA_RepGrpBtnAddLoc: "jfs_repgrp_btn_addloc"
        };
        
    var ID = {
            LENGTH_STATUS: "jfs_length_status"
        };
        
    var SEP = {
            Key: "/",
            Checkbox_Value: "|"
        };
        
    // JFS VARS
    var libsLoaded = false;
    var libraryDir = "/";
    var characterCountTimer;
    var textFieldsSelector;
    var selectionFieldsSelector;
        
    // MAKE SURE JQUERY IS LOADED AND GET SCRIPT LOCATION
    if (!window.jQuery) { alert("JBU Forms Error: jQuery Library Not Loaded."); }
    else {
        libsLoaded = true;
        
        // SCRIPT LOCATION (FIRST TRY BY ID BECAUSE IT IS 100% RELIABLE, THEN TRY CURRENT SCRIPT PATH)
        var libScript;
        var idScript = document.getElementById("jfs-library-script");
        if (idScript !== null) { libScript = idScript; }
        else {
            var allScripts = document.getElementsByTagName("script");
            libScript = allScripts[allScripts.length - 1];
        }
       
        var scriptSrcArray = libScript.getAttribute("src").split('?');
        libraryDir = scriptSrcArray[0].split('/').slice(0, -1).join('/') + '/';
    }

    // PUBLIC FUNCTIONS ///////////////////////////////////////////////////////////////////////////
    var JFS = {
        Init: function(form, values, opts) {
            var pack = jQuery.extend(true, {}, opts);
            
            if (!libsLoaded) { InitWait(form, pack); }
            else {
                
                // WE HAVE TO HAVE A CONTAINER ID
                if ("ContainerId" in pack) {
                    pack.Container = jQuery('#' + pack.ContainerId);
                    
                    if (pack.Container.length > 0) {

                        // CREATE FieldsInit DICTIONARY BY CLONING form
                        pack.FieldsInit = CloneObject(form);
                        
                        // GLOBAL PACKAGE SETTINGS
                        pack.ValuesKeys = [];
                        pack.ValuesUnfilled = [];
                        pack.FormIsReady = false;
                        pack.TabPressed = false;
                        pack.ShiftTabPressed = false;
                        
                        // STORE REPEATABLE GROUP DEFAULT VALUES
                        pack.RepeatableGroups = GetRepGrpsDataByFieldSets(pack.FieldsInit[KEY.field_sets]);
                        
                        // LOAD PREDEFINED OPTIONS
                        pack.PreDefindedOptionsNoEmptyDict = PreDefs(false);
                        pack.PreDefindedOptionsDict = PreDefs(true);
                        if (KEY.options_predefined in pack.FieldsInit) {
                            var optionDict = pack.FieldsInit[KEY.options_predefined];
                            for (var o = 0; o < optionDict.length; o++) {
                                if ((KEY.key in optionDict[o]) && (KEY.options in optionDict[o])) { pack.PreDefindedOptionsDict[optionDict[o][KEY.key]] = optionDict[o][KEY.options]; }
                            }
                        }
                        
                        // CREATE FieldsCurrent DICTIONARY AND IMPORT ANY SUPPLIED VALUES
                        pack.FieldsCurrent = CloneObject(pack.FieldsInit);
                        if (KEY.values in values) { ImportFieldSetsValues(pack.FieldsCurrent[KEY.field_sets], values[KEY.values], "", pack); }
                    

                        // ITERATE THROUGH OPTIONS, USING DEFAULTS IF UNSPECIFIED
                        for (var key in DEFAULT_FORM_OPTION) {
                            if (!(key in pack)) { pack[key] = DEFAULT_FORM_OPTION[key]; }
                        }
                        
                        // FINALLY BUILD FORM
                        BuildAndDisplayForm(pack);
                    
                    } else { alert("JBU Forms Error: A container with id \"" + pack.ContainerId.toString() + "\" could not be found on the page."); }
                    
                } else { alert("JBU Forms Error: 'ContainerId' must be set."); }
            }
        },
        
        Packages: {},
        ParseFormXml: ObjectifyFormXml,
        ParseValuesXml: ObjectifyValuesXml,
        PerformFormActions: PerformActions,
        GetPredefinedOptions: PreDefs,
		ParseSelectOptions: GetSelectOptionsHtml,
        ParseModifiersList: GetModsDict,
        ParseModifierParamsList: GetParamsDict,
        GetCurrentValues: GetCurrentFormValues,
		
        GetDomField: GetDomFieldByFormKey,
        GetCurrentFieldValue: function(formKey, pack) {
            var domField = GetDomFieldByFormKey(formKey, pack);
            if (!domField.hasClass(CLS.Unshown)) { return GetDomFieldValue(domField); }
            return "";
        },
        
        TriggerAutoCompleteSubmit: function(pack) { jQuery('#' + pack.ContainerId + ' button.' + CLS.AutoCompleteTriggerButton).click(); },
        RegisterExternalChange: function(domField) { domField.trigger('externalchange'); },
        
        TriggerBlurByFieldKeys: function(keys, pack) {
            var actions = [];
            for (var k = 0; k < keys.length; k++) {
                actions.push({ tgt: keys[k], act: "setfocusto" });
                actions.push({ tgt: keys[k], act: "triggerbluron" });
            }
            JFS.PerformFormActions(actions, pack);
        },
        
        SetTabIndexes: function(selector) {
            if (typeof selector === "undefined") { selector = ":input:not(:hidden)"; }
            jQuery(selector).each(function(ind) { jQuery(this).attr('tabindex', ind + 1); });
        }
    }
    
    // BUILD AND DISPLAY FORM
    function BuildAndDisplayForm(pack) {
        
        // DISPLAY FIELDS
        for (var t = 0; t < INTERFACE_TYPES.length; t++) { pack.Container.removeClass(CLS.Interface_Prefix + INTERFACE_TYPES[t]); }
        pack.Container.addClass(CLS.Container).addClass(CLS.Interface_Prefix + pack.Interface).empty().html(GetFormHtml(pack));
        
        // SAVE JQUERY FORM OBJECT TO pack
        pack.Form = jQuery('#' + pack.ContainerId + ' form');
        
        // STORE INTERACTION FIELDS FOR LISTENERS
        pack.Interactions = GetFormInteractions(pack);

        // INITIALIZE AUGMENTED FIELDS
        InitializeAugmentedFields(pack.Form, pack);
        
        // INITIALIZE STANDARD LISTENERS
        InitializeListeners(pack);
        
        // TRIGGER SAVE ON ALL FIELDS WITH OPTIONS SO THAT CUSTOM OPTIONS VALUES ARE SAVED INTO pack
        pack.Form.find('select').trigger('customoptionsinit');
        
        // RUN ALL DETECTIONS ON INIT VALUES
        for (var i in pack.Interactions.Setting) { PerformActions(GetFieldInteractions(i, pack),pack); }
        
        // SET AUTOFOCUS FOR BROWSERS THAT DON'T DO IT FOR DYNAMIC FORMS
        pack.Form.find('input[autofocus]').eq(0).focus();
        
        // TAB INDEXES
        if (pack.ResetPageTabIndexes) { JFS.SetTabIndexes(); }
        
        // GLOBALLY AVAILABLE REFERENCE TO FORM PACKAGES
        JFS.Packages[pack.ContainerId] = pack;
        
        // SETTINGS DISPLAYED AND READY CALLBACK
        pack.FormIsReady = true;
        if ("Ready" in pack) { pack.Ready(GetCurrentFormValues(pack).Values, pack); }
    }
    
    // STANDARD LISTENERS
    function InitializeListeners(pack) {
        var textFieldsSelectorList = [];
        for (var i = 0; i < TEXT_FIELD_TYPES.length; i++) { textFieldsSelectorList.push('input.' + CLS.Field + '_input[type=' + TEXT_FIELD_TYPES[i] + ']'); }
        
        textFieldsSelector = textFieldsSelectorList.join(', ') + ', textarea.' + CLS.Field + '_textarea';
        selectionFieldsSelector = 'select.' + CLS.Field + '_select, input.' + CLS.Field + '_input[type=radio], input.' + CLS.Field + '_input[type=checkbox]';
        
        var keyupTextTimer;
        
        pack.Form.on('paste', textFieldsSelector, function(event) {
            var domField = jQuery(this);
            var pasteTimer = setTimeout(function() { domField.trigger('custompaste', event); }, 100);
        });
        
        // KEY UP AND PASTE ON ALL TEXT AND TEXTAREA FIELDS
        pack.Form.on('keyup custompaste actionchange externalchange focusout', textFieldsSelector, function(event) {
			clearTimeout(keyupTextTimer);
            
			var domField = jQuery(this);
			var f = GetDomFieldPackage(domField, pack);
            
			if (domField.attr(ATTR.MaxLength) || domField.data(ATTR.DATA_MinLength)) { FieldCharacterCountPopup(domField); }
			
			// NUMBER FIELDS
			if (domField.hasClass(CLS.Field + '_input_number')) { domField.val(AllowChars(f.DomVal, "0123456789.-", false)); }
			
			// CHARACTER RESTRICTIONS
			if (domField.data(ATTR.DATA_AllowChars)) { domField.val(AllowChars(f.DomVal, domField.data(ATTR.DATA_AllowChars), false)); }
			if (domField.data(ATTR.DATA_PreventChars)) { domField.val(PreventChars(f.DomVal, domField.data(ATTR.DATA_PreventChars), false)); }
		
			TextFieldHasChanged(domField, f, pack, GetTriggerByEventType(event.type));
        });
        
        // CHANGE ON ALL SELECT, RADIO, AND CHECKBOX FIELDS
        pack.Form.on('change actionchange externalchange customoptionsinit', selectionFieldsSelector, function(event) {
            var domField = jQuery(this);
            var f = GetDomFieldPackage(domField, pack);
            
            // CHECK INTERACTIONS
            var actions = [];
            if (f.FormKey in pack.Interactions.Setting) { actions = GetFieldInteractions(f.FormKey, pack); }
            
            // FOR RADIOS AND CHECKBOXES THE FORM KEY WILL ALWAYS BE A SPECIFIC OPTION
            // SO WE ALSO CHECK FOR DETECTIONS ON THE INPUT'S PARENT
            if ((f.FcField[KEY.type] === "radio") || (f.FcField[KEY.type] === "checkbox")) {
                var pFormKey = f.FormKey.substr(0, f.FormKey.lastIndexOf(SEP.Key));
                if (pFormKey in pack.Interactions.Setting) { actions = actions.concat(GetFieldInteractions(pFormKey, pack)); }
            }
            
            // SAVE CHANGES TO PACKAGE
            f.FcField[KEY.field_value] = f.DomVal;
            
            // RUN CHANGED FUNCTION
            var vals = GetCurrentFormValues(pack);
            if (pack.FormIsReady) {
                var trigger = "user";
                if (event.type === "actionchange") { trigger = "action"; }
                else if (event.type === "externalchange") { trigger = "external"; }
                else if (event.type === "customoptionsinit") { trigger = "customoptionsinit"; }
                
                if ("Changed" in pack) { pack.Changed(domField, f.FormKey, f.DomVal, f.FcVal, vals.Values, vals.Unfilled, pack, trigger); }
            }
            
            // PERFORM ANY TRIGGERED ACTIONS
            PerformActions(actions, pack);
        });
        
        // FOCUS PAIR CLASS
        pack.Form.on('focus', textFieldsSelector + ', select.' + CLS.Field + '_select, button.' + CLS.Field + '_button', function() { jQuery(this).parent().parent().parent().addClass(CLS.HasFocus); });
        pack.Form.on('blur', textFieldsSelector + ', select.' + CLS.Field + '_select, button.' + CLS.Field + '_button', function() { jQuery(this).parent().parent().parent().removeClass(CLS.HasFocus); });
        pack.Form.on('focus', 'input.' + CLS.Field + '_input[type=radio], input.' + CLS.Field + '_input[type=checkbox]', function() {
            jQuery(this).parent().addClass(CLS.HasFocus); // ADD FOCUS CLASS TO LABEL
            jQuery(this).parent().parent().parent().parent().addClass(CLS.HasFocus); // ADD FOCUS CLASS TO FIELD CONTAINER
        });
        pack.Form.on('blur', 'input.' + CLS.Field + '_input[type=radio], input.' + CLS.Field + '_input[type=checkbox]', function() {
            jQuery(this).parent().removeClass(CLS.HasFocus); // REMOVE FOCUS CLASS FROM LABEL
            jQuery(this).parent().parent().parent().parent().removeClass(CLS.HasFocus); // REMOVE FOCUS CLASS FROM FIELD CONTAINER
        });
        
        // ONFOCUS LISTENERS
        pack.Form.on('focus', textFieldsSelector + ', ' + selectionFieldsSelector, function(event) {
            var domField = jQuery(this);
            var f = GetDomFieldPackage(domField, pack);
            if (f.FormKey in pack.Interactions.OnFocus) { PerformActions(pack.Interactions.OnFocus[f.FormKey], pack); }
        });

        // ONBLUR LISTENERS
        pack.Form.on('blur', textFieldsSelector + ', ' + selectionFieldsSelector, function(event) {
            var domField = jQuery(this);
            var f = GetDomFieldPackage(domField, pack);
            if (f.FormKey in pack.Interactions.OnBlur) { PerformActions(pack.Interactions.OnBlur[f.FormKey], pack); }
        });
        
        // BUTTONS
        pack.Form.on('click', 'button.' + CLS.Btn + ', button.' + CLS.AugmentBtn, function() {
            var btn = jQuery(this);
            var functionName = btn.data(ATTR.DATA_BtnFunct);
            var formKey = btn.data(ATTR.DATA_FormKeys).join(SEP.Key);
            var values = GetCurrentFormValues(pack);
            var param = btn.data(ATTR.DATA_BtnFunctParam);
            try { pack.Functions[functionName](values.Values, values.Unfilled, pack, formKey, param); }
            catch (e) { if (window.console) { console.log("JFS Error: Unable to run function: " + functionName, e); } }
        });
        
        // REPEATABLE GROUP BUTTONS
        pack.Form.on('click', 'button.' + CLS.RepGrpBtn, function() {
            var btn = jQuery(this);
            var prepend = (btn.data(ATTR.DATA_RepGrpBtnAddLoc) === "prepend");
            if (btn.hasClass(CLS.RepGrpBtn + '_add')) { RepGroupAdd(btn.parent().parent(), prepend, pack); }
            else if (btn.hasClass(CLS.RepGrpBtn + '_remove')) { RepGroupChange(btn.parent().parent().parent(), "remove", pack); }
            else if (btn.hasClass(CLS.RepGrpBtn + '_up')) { RepGroupChange(btn.parent().parent().parent(), "up", pack); }
            else if (btn.hasClass(CLS.RepGrpBtn + '_down')) { RepGroupChange(btn.parent().parent().parent(), "down", pack); }
        });
    }
	
	// TRIGGER TYPE
	function GetTriggerByEventType(type) {
		if (type === "actionchange") { return "action"; }
		else if (type === "externalchange") { return "external"; }
		else { return "user"; }
	}
    
    // INITIALIZE AUGMENTED FIELDS
    function InitializeAugmentedFields(cont, pack) {
        // ITERATE ONCE THROUGH ALL FIELDS AND CHECK FOR AUGMENTATION
        cont.find('input, select, textarea').each(function() {
            var domField = jQuery(this);
            
            // CHAR/WORD COUNTERS
            if (domField.hasClass(CLS.CharCounter)) { UpdateCharCount(domField); }
            if (domField.hasClass(CLS.WordCounter)) { UpdateWordCount(domField); }
            
            // DATE/TIME FIELDS
            if (typeof jQuery.ui !== 'undefined') {
                if (domField.hasClass(CLS.Date)) {
                    var dpSettings = domField.data(ATTR.DATA_DTPicker);
                    if (("JfsNoWeekends" in dpSettings) && (dpSettings.JfsNoWeekends)) { dpSettings.beforeShowDay = jQuery.datepicker.noWeekends; }
                    dpSettings.onClose = function() { CheckForFieldValueChanged(domField, GetDomFieldPackage(domField, pack), pack, "user"); };
                    domField.datepicker(dpSettings);
                
                } else if ((domField.hasClass(CLS.DateTime)) || (domField.hasClass(CLS.DateTimeLocal))) {
                    var dtpSettings = domField.data(ATTR.DATA_DTPicker);
                    if (("JfsNoWeekends" in dtpSettings) && (dtpSettings.JfsNoWeekends)) { dtpSettings.beforeShowDay = jQuery.datepicker.noWeekends; }
                    dtpSettings.addSliderAccess = true;
                    dtpSettings.sliderAccessArgs = { touchonly: false };
                    dtpSettings.onClose = function() { CheckForFieldValueChanged(domField, GetDomFieldPackage(domField, pack), pack, "user"); };
                    domField.datetimepicker(dtpSettings);
                }
            }
        });
    }
    
    // DE-INITIALIZE AUGMENTED FIELDS
    function DeinitializeAugmentedFields(cont, pack) {
        // ITERATE ONCE THROUGH ALL FIELDS AND CHECK FOR AUGMENTATION
        cont.find('input, select, textarea').each(function() {
            var domField = jQuery(this);
            
            // DATE/TIME FIELDS
            if (typeof jQuery.ui !== 'undefined') {
                if (domField.hasClass(CLS.Date) || domField.hasClass(CLS.DateTime) || domField.hasClass(CLS.DateTimeLocal)) { domField.datepicker("destroy"); }
            }
        });
    }
    
    // GET DOM FIELD
    function GetDomFieldByFormKey(formKey, pack) {
        var keys = formKey.split(SEP.Key);
        var isGroup = KeySetIsRepGrp(keys.slice(0), pack.FieldsInit[KEY.field_sets]);
        return GetDomElementByLocationKeyList(keys.slice(0), pack.Form, isGroup);
    }
    
    // GET FIELD PACKAGE
    function GetDomFieldPackage(domField, pack) {
        var sets = pack.FieldsCurrent[KEY.field_sets];
        var fieldKey = domField.attr('name');
        var domValue = GetDomFieldValue(domField);
        var keys = domField.data(ATTR.DATA_FormKeys);
        var formKey = keys.join(SEP.Key);
        var fcField = GetFieldObject(keys.slice(0), sets, false);
        var fcValue = (KEY.field_value in fcField ? fcField[KEY.field_value] : "");
        return { FieldKey: fieldKey, DomVal: domValue, FormKey: formKey, FcField: fcField, FcVal: fcValue };
    }
    
    // GET FIELD VALUE
    function GetDomFieldValue(field) {
        var type = field.eq(0).attr('type');
        if (type === "radio") {
            var val = field.eq(0).parent().parent().find('input:checked').val();
            return (typeof val === "undefined" ? "" : val);
                
        } else if (type === "checkbox") {
            var vals = [];
            field.eq(0).parent().parent().find('input:checked').each(function() { vals.push(jQuery(this).val()); });
            return vals.join(SEP.Checkbox_Value);
            
        } else { return field.val(); }
    }
    
    function DomFieldHasValue(field, excludeEmptyStrings) {
        var hasValue = false;
        var type = field.eq(0).attr('type');
        if ((type === "radio") || (type === "checkbox")) {
            var value = field.eq(0).parent().parent().find('input:checked').val();
            hasValue = (typeof value !== 'undefined');
        } else { hasValue = !(excludeEmptyStrings && (field.val() === "")); }
        return hasValue;
    }
    
    function GetFcSetByKey(key, pack) {
        var sets = pack.FieldsCurrent[KEY.field_sets];
        var set = {};
        for (var s = 0; s < sets.length; s++) {
            if (sets[s][KEY.key] === key) { set = sets[s]; }
        }
        return set;
    }
	
	// AFTER TEXT KEY UP - UPDATE COUNTERS, CHECK INTERACTIONS, AND SAVE CHANGES TO PACKAGE
	function TextFieldHasChanged(domField, f, pack, trigger) {
		// CHAR/WORD COUNTERS
		if (domField.hasClass(CLS.CharCounter)) { UpdateCharCount(domField); }
		if (domField.hasClass(CLS.WordCounter)) { UpdateWordCount(domField); }
		
        // CHECK INTERACTIONS
        var actions = [];
        if (f.FormKey in pack.Interactions.Setting) { actions = GetFieldInteractions(f.FormKey, pack); }
        
		// SAVE VALUE IF CHANGED
		CheckForFieldValueChanged(domField, f, pack, trigger);
        
        // PERFORM ANY TRIGGERED ACTIONS
        PerformActions(actions, pack);
	}
    
    // FIELD VALUE CHANGED?
    function CheckForFieldValueChanged(domField, f, pack, trigger) {
        if (f.FcVal !== f.DomVal) {
            
            // UPDATE FIELD VALUE
            f.FcField[KEY.field_value] = f.DomVal;
            
            // TRIGGER CHANGED FUNCTION
            var vals = GetCurrentFormValues(pack);
            if (pack.FormIsReady) {
                if ("Changed" in pack) { pack.Changed(domField, f.FormKey, f.DomVal, f.FcVal, vals.Values, vals.Unfilled, pack, trigger); }
            }
        }
    }
    
    // GET FIELD INTERACTIONS
    function GetFormInteractions(pack) {
        var dict = { Setting: {}, OnFocus: {}, OnBlur: {}, OnKeyUp: {} };
        if (KEY.interactions in pack.FieldsCurrent) {
            var ints = pack.FieldsCurrent[KEY.interactions];
            
            for (var i = 0; i < ints.length; i++) {
                var intDict = ints[i];
                
                // ITERATE THROUGH DETECTIONS
                for (var d = 0; d < intDict[KEY.detections].length; d++) {
                    var formKey = intDict[KEY.detections][d][KEY.target];
                    var formKeys = formKey.split(SEP.Key);
                    
                    if (intDict[KEY.detections][d][KEY.detect] === "onfocus") {
                        if (formKey in dict.OnFocus) { dict.OnFocus[formKey].push(intDict); }
                        else {
                            if (KEY.actions in intDict) { dict.OnFocus[formKey] = intDict[KEY.actions]; }
                            else if (KEY.actions_true in intDict) { dict.OnFocus[formKey] = intDict[KEY.actions_true]; }
                        }
                        
                    } else if (intDict[KEY.detections][d][KEY.detect] === "onblur") {
                        if (formKey in dict.OnBlur) { dict.OnBlur[formKey].push(intDict); }
                        else {
                            if (KEY.actions in intDict) { dict.OnBlur[formKey] = intDict[KEY.actions]; }
                            else if (KEY.actions_true in intDict) { dict.OnBlur[formKey] = intDict[KEY.actions_true]; }
                        }
                        
                    } else if (intDict[KEY.detections][d][KEY.detect] === "onkeyup") {
                        if (formKey in dict.OnKeyUp) { dict.OnKeyUp[formKey].push(intDict); }
                        else {
                            if (KEY.actions in intDict) { dict.OnKeyUp[formKey] = intDict[KEY.actions]; }
                            else if (KEY.actions_true in intDict) { dict.OnKeyUp[formKey] = intDict[KEY.actions_true]; }
                        }
                    
                    } else {
                        if (formKey in dict.Setting) { dict.Setting[formKey].push(intDict); }
                        else { dict.Setting[formKey] = [ intDict ]; }
                    }
                }
            }
        }
        return dict;
    }
    
    // PERFORM ANY FULFILLED FIELD ACTIONS
    function GetFieldInteractions(key, pack) {
        var actions = [];
        
        // ITERATE THROUGH INTERACTIONS
        if (key in pack.Interactions.Setting) {
            var ints = pack.Interactions.Setting[key];
            for (var i = 0; i < ints.length; i++) {
                var operator = (KEY.bool_operator in ints[i] ? ints[i][KEY.bool_operator] : "OR");
                if (CheckDetections(ints[i][KEY.detections], operator, pack)) {
                    if (KEY.actions_true in ints[i]) { actions = actions.concat((ints[i][KEY.actions_true])); }
                    else if (KEY.actions in ints[i]) { actions = actions.concat((ints[i][KEY.actions])); } // TEMPORARY LEGACY SUPPORT
                
                } else {
                    if (KEY.actions_false in ints[i]) { actions = actions.concat((ints[i][KEY.actions_false])); }
                }
            }
        }
        
        return actions;
    }
    
    // CHECK VALUE DETECTIONS
    function CheckDetections(dets, operator, pack) {
        var result = false;
        var trueCount = 0;
        
        // ITERATE THROUGH EACH DETECTION
        for (var d = 0; d < dets.length; d++) {
            var det = false;
            
            var keys = dets[d][KEY.target].split(SEP.Key);
            var isGroup = KeySetIsRepGrp(keys.slice(0), pack.FieldsInit[KEY.field_sets]);
            
            var fcSets = pack.FieldsCurrent[KEY.field_sets];
            var fcSet = GetFcSetByKey(keys[0], pack);
            
            var domField = GetDomElementByLocationKeyList(keys.slice(0), pack.Form, isGroup);
            var fcField = GetFieldObject(keys.slice(0), fcSets, false);
            
            var domShown = domField.is(':visible');
            var fcShown = !(KEY.show in fcField && fcField[KEY.show] === "false") && !(KEY.show in fcSet && fcSet[KEY.show] === "false");
            
            // ONSHOW/ONHIDE DETECTIONS
            var isShowHide = false;
            switch(dets[d][KEY.detect]) {
                case "onshow":
                    isShowHide = true;
                    if (!fcShown && domShown) { det = true; }
                    break;
                    
                case "onhide":
                    isShowHide = true;
                    if (fcShown && !domShown) { det = true; }
                    break;
                    
                default:
            }
            
            // ALL OTHER DETECTIONS
            if (!isShowHide) {
                var param = (KEY.param in dets[d] ? dets[d][KEY.param] : "");
                
                // REPEATABLE GROUPS
                if (isGroup) {
                    var fcGroup = GetFieldObject(keys.slice(0), fcSets, true);
                    var count = fcGroup[KEY.field_sets].length;
                    
                    switch(dets[d][KEY.detect]) {
                        case "groupitemcountis": if (count === parseInt(param, 10)) { det = true; }; break;
                        case "groupitemcountlessthan": if (count < parseInt(param, 10)) { det = true; }; break;
                        case "groupitemcountgreaterthan": if (count > parseInt(param, 10)) { det = true; }; break;
                        default:
                    }
                
                // INDIVIDUAL FIELDS
                } else {
                    var domValue = GetDomFieldValue(domField);
                    var fcValue = fcField[KEY.field_value];
                    switch(dets[d][KEY.detect]) {
                        case "isshown": if (domShown) { det = true; } break;
                        case "ishidden": if (!domShown) { det = true; } break;
                        
                        case "hasvalue": if (DomFieldHasValue(domField, false)) { det = true; } break;
                        case "hasvaluenotempty": if (DomFieldHasValue(domField, true)) { det = true; } break;
                        case "hasnovalue": if (!DomFieldHasValue(domField, false)) { det = true; } break;
                        case "hasnovalueorempty": if (!DomFieldHasValue(domField, true)) { det = true; } break;
                        
                        case "onchange": if (domValue !== fcValue) { det = true; } break;
                        case "onchangenotempty": if ((domValue !== "") && (domValue !== null)) { det = true; } break;
                        
                        case "valueis": if (domValue === param) { det = true; } break;
                        case "valueisnot": if (domValue !== param) { det = true; } break;
                        case "valuelessthan": if (parseInt(domValue, 10) < parseInt(param, 10)) { det = true; } break;
                        case "valuegreaterthan": if (parseInt(domValue, 10) > parseInt(param, 10)) { det = true; } break;
                        
                        case "checkboxvaluecontains": if (domValue.split(SEP.Checkbox_Value).indexOf(param) !== -1) { det = true; } break;
                        case "checkboxvaluedoesnotcontain": if (domValue.split(SEP.Checkbox_Value).indexOf(param) === -1) { det = true; } break;
                        case "checkboxvaluesumis":
                            var sumVals = domValue.split(SEP.Checkbox_Value);
                            var sum = 0;
                            for (var s = 0; s < sumVals.length; s++) { sum += (!isNaN(parseInt(sumVals[s], 10)) ? parseInt(sumVals[s], 10) : 0); }
                            if (sum === parseInt(param, 10)) { det = true; }
                            break;
                        case "checkboxvaluesumgreaterthan":
                            var gtVals = domValue.split(SEP.Checkbox_Value);
                            var gtSum = 0;
                            for (var g = 0; g < gtVals.length; g++) { gtSum += (!isNaN(parseInt(gtVals[g], 10)) ? parseInt(gtVals[g], 10) : 0); }
                            if (gtSum > parseInt(param, 10)) { det = true; }
                            break;
                        case "checkboxvaluesumlessthan":
                            var ltVals = domValue.split(SEP.Checkbox_Value);
                            var ltSum = 0;
                            for (var l = 0; l < ltVals.length; l++) { ltSum += (!isNaN(parseInt(ltVals[l], 10)) ? parseInt(ltVals[l], 10) : 0); }
                            if (ltSum < parseInt(param, 10)) { det = true; }
                            break;
                        default:
                    }
                }
            }
            if (det) { trueCount++; }
        }
        
        // PROCESS RESULT BASED ON OPERATOR
        if ((operator === "OR") && (trueCount > 0)) { result = true; } // OR: AT LEAST ONE IS TRUE
        else if ((operator === "AND") && (trueCount === dets.length)) { result = true; } // AND: ALL ARE TRUE
        else if ((operator === "XOR") && (!(trueCount % 2 === 0))) { result = true; } // XOR: AN ODD NUMBER ARE TRUE
        else if ((operator.indexOf('>') !== -1) && !isNaN(parseInt(operator.substring(1), 10)) && (trueCount > parseInt(operator.substring(1), 10))) { result = true; } // GREATER THAN N ARE TRUE
        else if ((operator.indexOf('<') !== -1) && !isNaN(parseInt(operator.substring(1), 10)) && (trueCount < parseInt(operator.substring(1), 10))) { result = true; } // LESS THAN N ARE TRUE
        else if ((operator.indexOf('=') !== -1) && !isNaN(parseInt(operator.substring(1), 10)) && (trueCount === parseInt(operator.substring(1), 10))) { result = true; } // SPECIFIC NUMBER ARE TRUE
        
        return result;
    }
    
    // PERFORM ACTIONS
    function PerformActions(acts, pack) {
        var sets = pack.FieldsCurrent[KEY.field_sets];
         
        // ITERATE THROUGH ACTIONS
        for (var i = 0; i < acts.length; i++) {
            var target = acts[i][KEY.target];
            var action = acts[i][KEY.action];
            var param = (KEY.param in acts[i] ? acts[i][KEY.param] : "");
            
            // SET ACTIONS
            if ((action === "showset") || (action === "hideset")) {
                var fcSet = GetFcSetByKey(target, pack);
                var domSet = GetDomSetByKey(target, pack);
                if (action === "showset") {
                    domSet.removeClass(CLS.Unshown);
                    fcSet[KEY.show] = "true";
                    
                } else {
                    if (!domSet.hasClass(CLS.Unshown)) { domSet.addClass(CLS.Unshown); }
                    fcSet[KEY.show] = "false";
                }
            
            // RUN FUNCTION
            } else if (action === "runfunction") {
                try {
                    var vals = GetCurrentFormValues(pack);
                    pack.Functions[target](vals.Values, vals.Unfilled, pack, param);

                } catch (e) { if (window.console) { console.log("JFS Error: Unable to run function.", target, e); } }
            
            // EVERYTHING ELSE
            } else {
                
                // WRAP IN TRY-CATCH BECAUSE IN CERTAIN CIRCUMSTANCES THE 'trigger' CALLS CAUSE AN EXCEPTION IF THE FIELD HAS BEEN MANIPULATED.
                // HOWEVER, SINCE THE TRIGGER IS TYPICALLY NOT CRITICAL WE DECIDED TO JUST LOG THE ERROR AND CONTINUE.
                try {
                    var key = target;
                    var keys = key.split(SEP.Key);
                    var isGroup = KeySetIsRepGrp(keys.slice(0), pack.FieldsInit[KEY.field_sets]);
                    var domPair = GetDomElementByLocationKeyList(keys.slice(0), pack.Form, true);
                    var domField = GetDomElementByLocationKeyList(keys.slice(0), pack.Form, isGroup);
                    var fcField = GetFieldObject(keys.slice(0), sets, isGroup);
                    
                    switch(action) {
                        case "disablefield":
                            var disLastKey = keys[keys.length - 1];
                            var disItemInd = parseInt(disLastKey);
                            var disIsSingleItem = !isNaN(disItemInd);
                                    
                            var disFieldType = domField.attr('type');
                            if ((disFieldType === "select") && (!domField.hasClass(CLS.KeyPrefix + disLastKey))) {
                                var disOptions = domField.find('option');
                                if (disOptions.length > disItemInd) {
                                    disOptions.eq(disItemInd).prop('disabled', true);
                                    fcField[KEY.options][disItemInd][KEY.disabled] = "true";
                                    domField.trigger('actionchange');
                                }
                            } else {
                                domField.prop('disabled', true);
                                if ((disFieldType === "radio") || (disFieldType === "checkbox")) {
                                    for (var d = 0; d < fcField[KEY.options].length; d++) {
                                        if (!disIsSingleItem || (disIsSingleItem && (d === disItemInd))) { fcField[KEY.options][d][KEY.disabled] = "true"; }
                                    }
                                    
                                } else { fcField[KEY.disabled] = "true"; }
                                domField.trigger('actionchange');
                            }
                            break;
                            
                        case "enablefield":
                            var enLastKey = keys[keys.length - 1];
                            var enItemInd = parseInt(enLastKey);
                            var enIsSingleItem = !isNaN(enItemInd);
                            
                            var enFieldType = domField.attr('type');
                            if ((enFieldType === "select") && (!domField.hasClass(CLS.KeyPrefix + enLastKey))) {
                                var enOptions = domField.find('option');
                                if (enOptions.length > enItemInd) {
                                    enOptions.eq(enItemInd).prop('disabled', false);
                                    fcField[KEY.options][enItemInd][KEY.disabled] = "false";
                                    domField.trigger('actionchange');
                                }
                            } else {
                                domField.prop('disabled', false);
                                if ((enFieldType === "radio") || (enFieldType === "checkbox")) {
                                    for (var e = 0; e < fcField[KEY.options].length; e++) {
                                        if (!enIsSingleItem || (enIsSingleItem && (e === enItemInd))) { fcField[KEY.options][e][KEY.disabled] = "false"; }
                                    }
                                    
                                } else { fcField[KEY.disabled] = "false"; }
                                domField.trigger('actionchange');
                            }
                            break;
                            
                        case "setaugmenthtmlaboveto":
                            domPair.find('div.' + CLS.AugmentHtmlAbove).remove();
                            domPair.prepend("<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlAbove + "'>" + param + "</div>");
                            break;
                            
                        case "setaugmenthtmlbelowto":
                            domPair.find('div.' + CLS.AugmentHtmlBelow).remove();
                            domPair.append("<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlBelow + "'>" + param + "</div>");
                            break;
                            
                        case "setaugmenthtmllabelaboveto":
                            domPair.find('div.' + CLS.AugmentHtmlLabelAbove).remove();
                            domPair.children('div.' + CLS.Label).prepend("<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlLabelAbove + "'>" + param + "</div>");
                            break;
                            
                        case "setaugmenthtmllabelbelowto":
                            domPair.find('div.' + CLS.AugmentHtmlLabelBelow).remove();
                            domPair.children('div.' + CLS.Label).append("<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlLabelBelow + "'>" + param + "</div>");
                            break;
                            
                        case "setaugmenthtmlfieldaboveto":
                            domPair.find('div.' + CLS.AugmentHtmlFieldAbove).remove();
                            domField.prepend("<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlFieldAbove + "'>" + param + "</div>");
                            break;
                            
                        case "setaugmenthtmlfieldbelowto":
                            domPair.find('div.' + CLS.AugmentHtmlFieldBelow).remove();
                            domField.append("<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlFieldBelow + "'>" + param + "</div>");
                            break;
                            
                        case "removeaugmenthtmlabove": domPair.find('div.' + CLS.AugmentHtmlAbove).remove(); break;
                        case "removeaugmenthtmlbelow": domPair.find('div.' + CLS.AugmentHtmlBelow).remove(); break;
                        case "removeaugmenthtmllabelabove": domPair.find('div.' + CLS.AugmentHtmlLabelAbove).remove(); break;
                        case "removeaugmenthtmllabelbelow": domPair.find('div.' + CLS.AugmentHtmlLabelBelow).remove(); break;
                        case "removeaugmenthtmlfieldabove": domPair.find('div.' + CLS.AugmentHtmlFieldAbove).remove(); break;
                        case "removeaugmenthtmlfieldbelow": domPair.find('div.' + CLS.AugmentHtmlFieldBelow).remove(); break;
                        
                        case "setfieldvalueto":
                            
                            // HTML FIELDS
                            if (domPair.hasClass(CLS.ContainsHtmlField)) {
                                domPair.children('.' + CLS.Field).html(param);
                            
                            // CHECKBOXES AND RADIOS
                            } else if ((fcField[KEY.type] === "radio") || (fcField[KEY.type] === "checkbox")) {
                                var setAllValues = param.split(SEP.Checkbox_Value);
                                domField.each(function() {
                                    var el = jQuery(this);
                                    if (setAllValues.indexOf(el.attr('value')) !== -1) { el.prop('checked', true); }
                                    else { el.prop('checked', false); }
                                    el.trigger('actionchange');
                                });
                            
                            // BUTTONS
                            } else if (fcField[KEY.type] === "button") {
                                domField.html(param).trigger('actionchange');
                            
                            // ALL OTHER FIELDS
                            } else { domField.val(param).trigger('actionchange'); }
                            break;
                            
                        case "copyfieldvaluefrom":
                            var copyFieldFormKey = param;
                            var copyFieldFormKeys = copyFieldFormKey.split(SEP.Key);
                            var copyFieldIsGroup = KeySetIsRepGrp(copyFieldFormKeys.slice(0), pack.FieldsInit[KEY.field_sets]);
                            var copyFieldDomField = GetDomElementByLocationKeyList(copyFieldFormKeys.slice(0), pack.Form, copyFieldIsGroup);
                            var copyFieldFcField = GetFieldObject(copyFieldFormKeys.slice(0), sets, copyFieldIsGroup);
                            var copyFieldValue = GetDomFieldValue(copyFieldDomField);
                            
                            // HTML FIELDS
                            if (domPair.hasClass(CLS.ContainsHtmlField)) {
                                domPair.children('.' + CLS.Field).html(copyFieldValue);
                            
                            // CHECKBOXES AND RADIOS
                            } else if ((fcField[KEY.type] === "radio") || (fcField[KEY.type] === "checkbox")) {
                                var copyAllValues = copyFieldValue.split(SEP.Checkbox_Value);
                                domField.each(function() {
                                    var el = jQuery(this);
                                    if (copyAllValues.indexOf(el.attr('value')) !== -1) { el.prop('checked', true); }
                                    else { el.prop('checked', false); }
                                    el.trigger('actionchange');
                                });
                            
                            // BUTTONS
                            } else if (fcField[KEY.type] === "button") {
                                domField.html(copyFieldValue).trigger('actionchange');
                            
                            // ALL OTHER FIELDS
                            } else { domField.val(copyFieldValue).trigger('actionchange'); }
                            break;
                            
                        case "settochecked":
                            if ((domField.attr('type') === "radio") || (domField.attr('type') === "checkbox")) {
                                domField.prop('checked', true);
                                domField.trigger('actionchange');
                            }
                            break;
                            
                        case "settounchecked":
                            if ((domField.attr('type') === "radio") || (domField.attr('type') === "checkbox")) {
                                domField.prop('checked', false);
                                domField.trigger('actionchange');
                            }
                            break;
                            
                        case "checkall":
                            if (domField.length > 0) { domField.prop('checked', true).trigger('actionchange'); }
                            break;
                            
                        case "uncheckall":
                            if (domField.length > 0) { domField.prop('checked', false).trigger('actionchange'); }
                            break;
                            
                        case "updatefieldoptions":
                            var newOptions = [];
                            try {
                                if (param in pack.CustomInputOptions) { newOptions = pack.CustomInputOptions[param](GetCurrentFormValues(pack).Values, pack); }
                                else if (param in pack.PreDefindedOptionsDict) { newOptions = pack.PreDefindedOptionsDict[param]; }

                            } catch (e) { if (window.console) { console.log("JFS Error: Unable to parse custom input options: ", pack.CustomInputOptions, e); } }

                            fcField[KEY.options] = CloneObject(newOptions);
                            domField.html(GetSelectOptionsHtml(newOptions, "")).trigger('actionchange');
                            break;
                            
                        case "removeselectoption":
                            var remLastKey = keys[keys.length - 1];
                            var remFieldType = domField.attr('type');
                            if ((remFieldType === "select") && (!domField.hasClass(CLS.KeyPrefix + remLastKey))) {
                                var selectInd = parseInt(remLastKey);
                                var remOptions = domField.children('option');
                                if (remOptions.length > selectInd) {
                                    remOptions.eq(selectInd).remove();
                                    delete fcField[KEY.options][selectInd];
                                    domField.trigger('actionchange');
                                }
                            }
                            break;
                            
                        case "setlabelto": domPair.find('div.' + CLS.Label + ' label, div.' + CLS.Label + ' legend').html(param); break;
                        case "prependlabelwith": domPair.find('div.' + CLS.Label + ' label, div.' + CLS.Label + ' legend').prepend(param); break;
                        case "appendlabelwith": domPair.find('div.' + CLS.Label + ' label, div.' + CLS.Label + ' legend').append(param); break;
                        
                        case "addclasstopair": domPair.addClass(param); break;
                        case "removeclassfrompair": domPair.removeClass(param); break;
                        case "togglepairclass": domPair.toggleClass(param); break;
                        
                        case "addclasstolabelcont": domPair.children('div.' + CLS.Label).addClass(param); break;
                        case "removeclassfromlabelcont": domPair.children('div.' + CLS.Label).removeClass(param); break;
                        case "togglelabelcontclass": domPair.children('div.' + CLS.Label).toggleClass(param); break;
                        
                        case "addclasstolabel": domPair.children('div.' + CLS.Label).children('label, legend').addClass(param); break;
                        case "removeclassfromlabel": domPair.children('div.' + CLS.Label).children('label, legend').removeClass(param); break;
                        case "togglelabelclass": domPair.children('div.' + CLS.Label).children('label, legend').toggleClass(param); break;
                        
                        case "addclasstofieldcont": domPair.children('div.' + CLS.Field).addClass(param); break;
                        case "removeclassfromfieldcont": domPair.children('div.' + CLS.Field).removeClass(param); break;
                        case "togglefieldcontclass": domPair.children('div.' + CLS.Field).toggleClass(param); break;
                        
                        case "addclasstofield": domField.addClass(param); break;
                        case "removeclassfromfield": domField.removeClass(param); break;
                        case "togglefieldclass": domField.toggleClass(param); break;
                        
                        case "removeelementwithselector": domPair.find(param).remove(); break;
                        
                        case "showfield":
                            domPair.removeClass(CLS.Unshown);
                            domField.trigger('actionchange');
                            fcField[KEY.show] = "true";
                            break;
                            
                        case "hidefield":
                            if (!domPair.hasClass(CLS.Unshown)) { domPair.addClass(CLS.Unshown); }
                            domField.trigger('actionchange');
                            fcField[KEY.show] = "false";
                            break;
                            
                        case "scrollto": jQuery('html, body').animate({ scrollTop: domPair.offset().top }, "fast"); break;
                        
                        case "setfocusto": domField.focus(); break;
                        case "triggerbluron": domField.blur(); break;
                            
                        default:
                    }
                
                } catch (ex) { if (window.console) { console.log(ex); } }
            }
        }
    }
    
    // GET REPEATABLE GROUP VALUES
    function GetRepGrpsDataByFieldSets(sets) {
        var values = {};
        var adds = {};
        for (var i = 0; i < sets.length; i++) { GetRepGrpAddValuesByFields(sets[i][KEY.key], sets[i], adds, values); }
        return { Values: values, Adds: adds };
    }
    
    function GetRepGrpAddValuesByFields(formKey, set, adds, values) {
        if (KEY.fields in set) {
            var fields = set[KEY.fields];
            // ITERATE FIELDS
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                if (KEY.field_sets in field) {
                    var groupKey = formKey + "/" + field[KEY.key];
                    
                    // ANY BUTTONS?
                    if (KEY.control_btns in field) {
                        var btnList = field[KEY.control_btns];
                        // ITERATE BUTTONS
                        for (var b = 0; b < btnList.length; b++) {
                            if (KEY.key in btnList[b]) {
                                var btnDict = btnList[b];
                                // ADD BUTTON WITH PARAMS?
                                if ((btnDict[KEY.key] === "add") && (KEY.params in btnDict)) {
                                    var params = btnDict[KEY.params];
                                    // ITERATE PARAMS
                                    for (var p = 0; p < params.length; p++) {
                                        // VALUES PARAM AND SUPPORTING PARAM?
                                        if ((params[p][KEY.key] === "values") && (KEY.param in params[p])) {
                                            var valuesObj = params[p][KEY.param][0];
                                            if (typeof valuesObj !== "undefined") { values[groupKey] = valuesObj; }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                    // SAVE ADD SET
                    adds[groupKey] = field[KEY.field_sets][0];
                    
                    // INNER REPEATABLE GROUPS?
                    GetRepGrpAddValuesByFields(groupKey, field[KEY.field_sets][0], adds, values);
                }
            }
        }
    }
    
    // ADD TO REPEATABLE GROUP
    function RepGroupAdd(domGroup, prepend, pack) {
        var fcSets = pack.FieldsCurrent[KEY.field_sets];
        var keys = domGroup.data(ATTR.DATA_FormKeys);
        var fcGroup = GetFieldObject(keys.slice(0), fcSets, true);
        
        // CHECK FOR MIN COUNT MODIFIER
        var maxCount = MAXIMUM_GROUP_ITEMS;
        if (KEY.mods in fcGroup) {
            var modsDict = GetModsDict(fcGroup[KEY.mods]);
            if (MOD.Count in modsDict) {
                try {
                    var countDict = GetParamsDict(modsDict[MOD.Count][KEY.params]);
                    if (MOD.Max in countDict) { maxCount = parseInt(countDict[MOD.Max]); }

                } catch (e) { if (window.console) { console.log("JFS Error: Error parsing repeatable group min count modifier", keys, e); } }
            }
        }
        
        // IF LESS THAN MAX COUNT ALLOW SET TO BE ADDED
        if (fcGroup[KEY.field_sets].length < maxCount) {
            
            // BUILD KEYS
            var groupKeys = [ keys[0] ];
            for (var k = 1; k < keys.length; k = k + 2) { groupKeys.push(keys[k]); }
            var groupKey = groupKeys.join(SEP.Key);
            
            // BEFORE CHANGE FUNCTION
            if ("RepeatableGroupBeforeChange" in pack) { pack.RepeatableGroupBeforeChange("add", domGroup, groupKey, pack, function() { RepGroupAddStep2(keys, domGroup, fcGroup, groupKey, prepend, pack); }); }
            else { RepGroupAddStep2(keys, domGroup, fcGroup, groupKey, prepend, pack); }
        }
    }
    
    function RepGroupAddStep2(keys, domGroup, fcGroup, groupKey, prepend, pack) {
        
        // BUILD FIELDSET OBJECT STARTING WITH STORED DEFAULT
        var addSet = {};
        if (groupKey in pack.RepeatableGroups.Adds) { addSet = CloneObject(pack.RepeatableGroups.Adds[groupKey]); }
        var addSetArray = [addSet];
        
        // GET STORED ADD VALUES
        var addValues = {};
        if (groupKey in pack.RepeatableGroups.Values) { addValues = CloneObject(pack.RepeatableGroups.Values[groupKey]); }
        var addValuesArray = [addValues];
        
        // MERGE VALUES INTO FIELDSET OBJECT
        ImportFieldSetsValues(addSetArray, CloneObject(addValuesArray), keys.join(SEP.Key), pack);
        
        // ADD TO FieldsCurrent 0BJECT
        if (prepend) { fcGroup[KEY.field_sets].unshift(addSetArray[0]); }
        else { fcGroup[KEY.field_sets].push(addSetArray[0]); }
        
        // SET KEYS
        for (var s = 0; s < fcGroup[KEY.field_sets].length; s++) { fcGroup[KEY.field_sets][s][KEY.key] = s.toString(); }
        
        // REBUILD GROUP WITH ADDED SETS
        domGroup.children('.' + CLS.RepGrpSets).empty().html(GetFieldSetsHtml(fcGroup, keys, true, pack));
        
        // INITIALIZE ANY AUGMENTED FIELDS
        InitializeAugmentedFields(domGroup, pack);
        
        // DETECTIONS
        var key = keys.join(SEP.Key);
        CheckRepGrpNonCountInteractions([ "ongroupitemadd" ], keys, pack);
        var actions = GetFieldInteractions(key, pack);
        for (var i in pack.Interactions.Setting) {
            if (i.indexOf(key) === 0) { actions = actions.concat(GetFieldInteractions(i, pack)); }
        }
        
        // TRIGGER CHANGED FUNCTION WITH NEW VALUES
        var vals = GetCurrentFormValues(pack);
        if ("Changed" in pack) { pack.Changed(domGroup, groupKey, null, null, vals.Values, null, pack, "usergroupitemadd"); }
        
        // PERFORM ANY TRIGGERED ACTIONS
        PerformActions(actions, pack);
    }
    
    // MOVE/REMOVE FROM REPEATABLE GROUP
    function RepGroupChange(domRepGrpSet, action, pack) {
        var domGroup = domRepGrpSet.parent().parent();
        var fcSets = pack.FieldsCurrent[KEY.field_sets];
        var keys = domGroup.data(ATTR.DATA_FormKeys);
        var fcGroup = GetFieldObject(keys.slice(0), fcSets, true);
        var index = domRepGrpSet.index();
        var nonCountDetections = [];
        var allowGroupChange = true;
        
        switch(action) {
            case "remove":
                // CHECK FOR MIN COUNT MODIFIER
                var minCount = 0;
                if (KEY.mods in fcGroup) {
                    var modsDict = GetModsDict(fcGroup[KEY.mods]);
                    if (MOD.Count in modsDict) {
                        try {
                            var countDict = GetParamsDict(modsDict[MOD.Count][KEY.params]);
                            if (MOD.Min in countDict) { minCount = parseInt(countDict[MOD.Min]); }

                        } catch (e) { if (window.console) { console.log("JFS Error: Error parsing repeatable group min count modifier", keys, e); } }
                    }
                }
                
                if (fcGroup[KEY.field_sets].length > minCount) {
                    fcGroup[KEY.field_sets].splice(index, 1);
                    nonCountDetections.push("ongroupitemremove");
                
                } else { allowGroupChange = false; }
                break;
                
            case "up":
                var upTo = index - 1;
                if (upTo > -1) {
                    MoveArrayEls(fcGroup[KEY.field_sets], index, upTo);
                    nonCountDetections.push("ongroupitemmove", "ongroupitemmoveup");
                }
                break;
                
            case "down":
                var downTo = index + 1;
                if (downTo < fcGroup[KEY.field_sets].length) {
                    MoveArrayEls(fcGroup[KEY.field_sets], index, downTo);
                    nonCountDetections.push("ongroupitemmove", "ongroupitemmovedown");
                }
                break;
            
            default:
        }
        
        if (allowGroupChange) {
            var groupKey = keys.join(SEP.Key) + SEP.Key + index.toString();
        
            // TRIGGER BEFORE CHANGE FUNCTION
            if ("RepeatableGroupBeforeChange" in pack) { pack.RepeatableGroupBeforeChange(action, domGroup, groupKey, pack, function() { RepGroupChangeStep2(keys, domGroup, fcGroup, groupKey, nonCountDetections, action, pack); }); }
            else { RepGroupChangeStep2(keys, domGroup, fcGroup, groupKey, nonCountDetections, action, pack); }
        }
    }
    
    function RepGroupChangeStep2(keys, domGroup, fcGroup, groupKey, nonCountDetections, action, pack) {
        
        // RESET GROUP KEYS BASED ON NEW ORDER
        for (var s = 0; s < fcGroup[KEY.field_sets].length; s++) { fcGroup[KEY.field_sets][s][KEY.key] = s + ""; }
        
        // DEINITIALIZE ANY AUGMENTED FIELDS
        DeinitializeAugmentedFields(domGroup, pack);
        
        // REBUILD HTML
        domGroup.children('.' + CLS.RepGrpSets).empty().html(GetFieldSetsHtml(fcGroup, keys, true, pack));
        
        // INITIALIZE ANY AUGMENTED FIELDS
        InitializeAugmentedFields(domGroup, pack);
        
        // DETECTIONS
        CheckRepGrpNonCountInteractions(nonCountDetections, keys, pack);
        var actions = GetFieldInteractions(keys.join(SEP.Key), pack);
        
        // TRIGGER CHANGED FUNCTION WITH NEW VALUES
        var vals = GetCurrentFormValues(pack);
        if ("Changed" in pack) { pack.Changed(domGroup, groupKey, null, null, vals.Values, null, pack, "usergroupitem" + action); }
        
        // PERFORM ANY TRIGGERED ACTIONS
        PerformActions(actions, pack);
    }
    
    // PERFORM FULFILLED REPEATABLEGROUP NON-COUNT ACTIONS
    function CheckRepGrpNonCountInteractions(detList, keys, pack) {
        var formKey = keys.join(SEP.Key);
        var ints = pack.Interactions.Setting;
        if (formKey in ints) {
            for (var i = 0; i < ints[formKey].length; i++) {
                var run = false;
                var dets = ints[formKey][i][KEY.detections];
                var acts = ints[formKey][i][KEY.actions];
                for (var d = 0; d < dets.length; d++) { if (detList.indexOf(dets[d][KEY.detect]) !== -1) { run = true; } }
                if (run) {
                    if (KEY.actions in ints[formKey][i]) { PerformActions(ints[formKey][i][KEY.actions], pack); }
                    else if (KEY.actions_true in ints[formKey][i]) { PerformActions(ints[formKey][i][KEY.actions_true], pack); }
                
                } else { if (KEY.actions_false in ints[formKey][i]) { PerformActions(ints[formKey][i][KEY.actions_false], pack); } }
            }
        }
    }
    
    // GET CURRENT FORM VALUES
    function GetCurrentFormValues(pack) {
        var values = {};
        values[KEY.values] = {};
        
        pack.ValuesKeys = [];
        pack.ValuesUnfilled = [];
        var setsValuesArray = GetValuesObjFromFieldSets(pack.FieldsCurrent[KEY.field_sets], 0, pack);
        
        for (var s = 0; s < setsValuesArray.length; s++) {
			if (!jQuery.isEmptyObject(setsValuesArray[s])) { values[KEY.values][pack.FieldsCurrent[KEY.field_sets][s][KEY.key]] = setsValuesArray[s]; }
		}
        
        return { Values: values, Unfilled: pack.ValuesUnfilled };
    }
    
    // GET VALUES OBJECT FROM AN ARRAY OF FIELD SETS
    function GetValuesObjFromFieldSets(sets, level, pack) {
        var values = [];
        for (var s = 0; s < sets.length; s++) {
            pack.ValuesKeys[level] = sets[s][KEY.key];
            var setFields = sets[s][KEY.fields];
            var setValues = {};
            for (var f = 0; f < setFields.length; f++) {
                var field = setFields[f];
                if (
                    (field[KEY.type] !== "button") &&
                    (field[KEY.type] !== "html") &&
                    !(KEY.show in field && field[KEY.show] === "false") &&
                    !(KEY.show in sets[s] && sets[s][KEY.show] === "false")
                ) {
                    if (KEY.field_sets in field) {
                        pack.ValuesKeys[level + 1] = field[KEY.key];
                        setValues[field[KEY.key]] = GetValuesObjFromFieldSets(field[KEY.field_sets], level + 2, pack);
                        
                    } else {
                        var fieldValue = (KEY.field_value in field ? field[KEY.field_value] : "");
                        setValues[field[KEY.key]] = fieldValue;
                        
                        if (KEY.mods in field) {
                            var modsDict = GetModsDict(field[KEY.mods]);
                            if ((MOD.Req in modsDict) && (fieldValue === "")) {
                                var fieldKeys = pack.ValuesKeys.slice(0, level + 1);
                                fieldKeys.push(field[KEY.key]);
                                var fieldKey = fieldKeys.join(SEP.Key);
                                var unfilledDict = {};
                                unfilledDict[KEY.key] = fieldKey;
                                unfilledDict[KEY.param] = "Sorry, the required field, \"" + field[KEY.label] + "\", appears to be unfilled.";
                                if (KEY.param in modsDict[MOD.Req]) { unfilledDict[KEY.param] = modsDict[MOD.Req][KEY.param]; }
                                pack.ValuesUnfilled.push(unfilledDict);
                            }
                        }
                    }
                }
            }
            values.push(setValues);
        } 
        return values;
    }
    
    //  MOVE ARRAY ELEMENTS
    function MoveArrayEls(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
    }
    
    // GET FieldsCurrent FIELD BY KEY
    function GetFieldObject(keys, sets, returnGroup) {
        var set = sets[0];
        if (sets.length > 1) {
            for (var s = 0; s < sets.length; s++) { if (sets[s][KEY.key] === keys[0]) { set = sets[s]; } }
        }
        
        var fields = set[KEY.fields];
        var obj = fields[0];
        if (fields.length > 1) {
            for (var f = 0; f < fields.length; f++) { if (fields[f][KEY.key] === keys[1]) { obj = fields[f]; } }
        }
        
        if (KEY.field_sets in obj) {
            keys.shift();
            keys.shift();
            if (returnGroup && (keys.length === 0)) { return obj; }
            else if (obj[KEY.field_sets].length < 1) { return {}; }
            else { return GetFieldObject(keys, obj[KEY.field_sets], returnGroup); }
        }
        else if (obj[KEY.key] === keys[1]) { return obj; }
        else { return {}; }
    }
    
    // KEY SET IS REPEATABLE GROUP
    function KeySetIsRepGrp(keys, sets) {
        var set = sets[0];
        if (sets.length > 1) {
            for (var s = 0; s < sets.length; s++) { if (sets[s][KEY.key] === keys[0]) { set = sets[s]; } }
        }
        
        var fields = set[KEY.fields];
        var obj = fields[0];
        if (fields.length > 1) {
            for (var f = 0; f < fields.length; f++) { if (fields[f][KEY.key] === keys[1]) { obj = fields[f]; } }
        }
        
        if (keys.length <= 3) { return (obj[KEY.type] === "repeatablegroup"); }
        else {
            keys.shift();
            keys.shift();
            keys[0] = "0"; // DEFAULT GROUPS CAN ONLY HAVE ONE SET
            return KeySetIsRepGrp(keys, obj[KEY.field_sets]);
        }
    }
    
    // GET JQUERY FIELD BY LOCATION KEY
    function GetDomElementByLocationKeyList(keys, cont, returnPair) {
        var el = cont;
        if (cont.hasClass(CLS.Form)) { el = cont.children('.' + CLS.KeyPrefix + keys[0]); } //FORM: RETURN SET
        else if (cont.hasClass(CLS.Set)) {
            var pair = cont.children('fieldset').children('.' + CLS.ContainsFieldPrefix + keys[0]);
            
            // REPEATABLE GROUP
            if (pair.hasClass(CLS.ContainsGroup)) {
                // IF THIS IS THE LAST KEY AND WE NEED A PAIR, RETURN GROUP PAIR.
                // OTHERWISE RETURN GROUP SET
                if (returnPair && (keys.length === 1)) { el = pair; }
                else { el = pair.children('div.' + CLS.Group).children('div.' + CLS.RepGrpSets).children('.' + CLS.KeyPrefix + keys[1]); }
                keys.shift();
            
            } else {
                if (returnPair) { el = pair; } // SET: RETURN PAIR
                else { el = pair.find('[data-' + ATTR.DATA_FieldName + '="' + keys[0] + '"]'); } // SET: RETURN FIELD
            }
        }
        else if (cont.length > 1) { el = el.eq(keys[0]); } // MULTIPLE ELEMENTS (CHECKBOX OR RADIO): RETURN SPECIFIC ELEMENT
        
        if (keys.length <= 1) { return el; }
        else {
            keys.shift();
            return GetDomElementByLocationKeyList(keys, el, returnPair);
        }
    }
    
    function GetDomSetByKey(key, pack) {
        return jQuery('#' + pack.ContainerId + ' form > div.' + CLS.ContainsSetPrefix + key);
    }
    
    // POPUP DIV FOR MAX CHARACTERS
    function FieldCharacterCountPopup(field) {
        clearTimeout(characterCountTimer);
        jQuery('#' + ID.LENGTH_STATUS).remove(); // REMOVE PREVIOUS DIV
        
        var showStatus = false;
        var statusPercentage = 0;   
        var min = 0;
        var max = 9999;
        var cur = field.val().length;
        
        // SHOW SETTING
        if (field.data(ATTR.DATA_ShowStatus)) {
            showStatus = true;
            var status = field.data(ATTR.DATA_ShowStatus);
            if (status.indexOf('%') !== -1) { statusPercentage = parseInt(status.replace('%','')); }
        }
        
        if (field.data(ATTR.DATA_MinLength)) { min = parseInt(field.data(ATTR.DATA_MinLength)); }
        if (field.is('[' + ATTR.MaxLength + ']')) { max = parseInt(field.attr(ATTR.MaxLength)); }
        var maxThresholdReached = ((cur/max * 100) > statusPercentage);
        
        if (showStatus && ((cur < min) || maxThresholdReached)) {

            var html = "<div id='" + ID.LENGTH_STATUS + "'><p>";
            html += "Length: <b>" + cur + "</b>";
            
            var limits = [];
            if (min > 0) { limits.push("MIN: <b>" + min + "</b>"); }
            if (max < 9999) { limits.push("MAX: <b>" + max + "</b>"); }
            html += "<br/><span>(" + limits.join(', ') + ")</span>";
            
            html += "</p></div>";
            field.before(html);
            
            // HIDE POPUP AFTER TWO SECTIONS OF INACTIVITY
            characterCountTimer = setTimeout(function() { jQuery('#' + ID.LENGTH_STATUS).fadeOut(100); }, 3000);
            
            // REMOVE ON BLUR
            field.blur(function() {
                jQuery('#' + ID.LENGTH_STATUS).remove();
                clearTimeout(characterCountTimer);
            });
        }
    }
    
    
    
// BUILD FIELDS HTML /////////////////////////////////////////////////////////////////////////////////////
    
    // GET FORM HTML
    function GetFormHtml(pack) {
        var sets = pack.FieldsCurrent[KEY.field_sets];
        var html = GetFieldSetsHtml(sets, [], false, pack);
        if (!pack.ExcludeFormTags) { html = ContainerWrap('form', '', 0, [], [], [], html, pack); }
        return html;
    }
    
    // GET FIELD SETS HTML
    function GetFieldSetsHtml(target, setFormKeys, isRepGrp, pack) {
        var html = "";
        var sets = target;
        
        // IF IS REPEATABLE GROUP USE GROUP FIELD SETS
        if (isRepGrp) { sets = target[KEY.field_sets]; }
        
        for (var a = 0; a < sets.length; a++) {
            var set = sets[a];
            
            // FIELDSET KEY
            var setKey = a + "";
            if (KEY.key in set) { setKey = set[KEY.key]; }
            
            // FIELDSET CLASSES
            var setClassList = [];
            setClassList.push(CLS.KeyPrefix + setKey);
            
            // FIELDSET ATTRIBUTES
            var fieldsetAttrs = [];
            
            // FIELDSET MODIFIERS
            var setModsDict = {};
            if (KEY.mods in set) { setModsDict = GetModsDict(set[KEY.mods]); }
            if (MOD.AddClass in setModsDict) { setClassList.push(setModsDict[MOD.AddClass][KEY.param]); }
            if ((MOD.AddDataAttrs in setModsDict) && (KEY.params in setModsDict[MOD.AddDataAttrs])) { fieldsetAttrs = GetDataAttributsFromParams(setModsDict[MOD.AddDataAttrs][KEY.params]); }
            
            // FIELDSET HTML
            var setHtml = "";
            if ((KEY.show in set) && (set[KEY.show] === "false")) { setClassList.push(CLS.Unshown); }
            if (KEY.fields in set) {
                
                // ANY GROUP FIELDS MODS?
                var groupFieldsMods = {};
                if (KEY.mods_group_fields in target) {
                    var fMods = target[KEY.mods_group_fields];
                    for (var fm = 0; fm < fMods.length; fm++) {
                        if ((KEY.key in fMods[fm]) && (KEY.mods in fMods[fm])) { groupFieldsMods[fMods[fm][KEY.key]] = fMods[fm][KEY.mods]; }
                    }
                }
                
                // ADD PAIRS TO FIELDSET
                var setFields = set[KEY.fields];
                for (var b = 0; b < setFields.length; b++) {
                    // CHECK FOR GROUP MODS
                    if (isRepGrp) {
                        var groupFieldKey = a + "/" + setFields[b][KEY.key];
                        if (groupFieldKey in groupFieldsMods) {
                            if (KEY.mods in setFields[b]) { setFields[b][KEY.mods] = MergeMods(setFields[b][KEY.mods].slice(0), groupFieldsMods[groupFieldKey]); }
                            else { setFields[b][KEY.mods] = groupFieldsMods[groupFieldKey]; }
                        }
                    }
                    setHtml += GetPairHtml(setFields[b], setFormKeys, setKey, isRepGrp, pack);
                }
            }
            
            var contKey = (isRepGrp ? 'repgrpset' : 'set');
            var contTarget = (isRepGrp ? target : set);
            html += ContainerWrap(contKey, contTarget, a, setClassList, fieldsetAttrs, [], setHtml, pack);
        }
        
        return html;
    }
    
    // CONTAINER WRAPS
    function ContainerWrap(type, target, ind, classes, attrs, fieldsetAttrs, html, pack) {
        classes.push(CLS.Container);
        if (type in pack.CustomContainers) { html = pack.CustomContainers[type](classes, html, pack); }
        else {
            switch(type) {
                case 'form':
                    classes.push(CLS.Form);
                    
                    // addclass AND adddataattributes MODS ARE SUPPORTED FOR FORM TAG
                    if (KEY.mods in pack.FieldsInit) {
                        var formMods = GetModsDict(pack.FieldsInit[KEY.mods]);
                        if ((MOD.AddClass in formMods) && (KEY.param in formMods[MOD.AddClass]) && (formMods[MOD.AddClass][KEY.param] !== "")) {
                            var formAdds = (formMods[MOD.AddClass][KEY.param]).split(' ');
                            for (var f = 0; f < formAdds.length; f++) { classes.push(formAdds[f]); }
                        }
                        if ((MOD.AddDataAttrs in formMods) && (KEY.params in formMods[MOD.AddDataAttrs])) { attrs = GetDataAttributsFromParams(formMods[MOD.AddDataAttrs][KEY.params]); }
                    }
                    
                    attrs.push(GetAttr('class', classes.join(' ')));
                    attrs.push(GetAttr('autocomplete', (pack.AutoComplete ? "on" : "off")));
                    if (pack.NoValidate) { attrs.push(GetAttr('novalidate', 'novalidate')); }
                    if (pack.IncludeAutoCompleteTrigger) {
                        attrs.push(GetAttr('method', 'GET'));
                        attrs.push(GetAttr('action', libraryDir + BLANK_FILENAME));
                        attrs.push(GetAttr('target', 'jfs_trigger_browser_autocomplete_iframe'));
                    }
                    
                    html = "<form " + attrs.join(' ') + ">" + html;
                    if (pack.IncludeAutoCompleteTrigger) {
                        html += "<button class='" + CLS.AutoCompleteTriggerButton + "' type='submit' style='display: none'></button></form>";
                        html += "<iframe id='jfs_trigger_browser_autocomplete_iframe' name='jfs_trigger_browser_autocomplete_iframe' style='display: none' src='" + libraryDir + BLANK_FILENAME+ "'></iframe>";
                    
                    } else { html += "</form>"; }
                    break;
                    
                case 'set':
                    classes.push(CLS.Set);
                    classes.push(CLS.ContainsSetPrefix + target[KEY.key]);
                    
                    // ADD CLASS MOD IS SUPPORTED FOR SET CONTAINERS
                    if (KEY.mods in target) {
                        var setMods = GetModsDict(target[KEY.mods]);
                        if ((MOD.AddClass in setMods) && (KEY.param in setMods[MOD.AddClass]) && (setMods[MOD.AddClass][KEY.param] !== "")) {
                            var setAdds = (setMods[MOD.AddClass][KEY.param]).split(' ');
                            for (var s = 0; s < setAdds.length; s++) { classes.push(setAdds[s]); }
                        }
                    }
                    
                    attrs.push(GetAttr('class', classes.join(' ')));
                    
                    var setHtml1 = "<div " + attrs.join(' ') + "><fieldset>";
                    if (KEY.legend in target) { setHtml1 += "<legend>" + target[KEY.legend] + "</legend>"; }
                    var setHtml2 = "</fieldset></div>";
                    html = setHtml1 + html + setHtml2;
                    break;
                    
                case 'repgrpset':
                    classes.push(CLS.Set);
                    attrs.push(GetAttr('class', classes.join(' ')));
                    var repGrpSet = target[KEY.field_sets][ind];
                    var rgSetBtnsHtml = GetRepGrpCtrlButtonsHtml(target, false, pack);
                    var rgSetHtml = "<div " + attrs.join(' ') + "><fieldset>";
                    if (KEY.legend in repGrpSet) { rgSetHtml += "<legend>" + repGrpSet[KEY.legend] + " (" + parseInt(ind + 1) + ")</legend>"; }
                    if (rgSetBtnsHtml.above !== "") { rgSetHtml += "<div class=\"" + CLS.RepGrpCtrlBtns + " " + CLS.RepGrpCtrlBtns + "_above\">" + rgSetBtnsHtml.above + "</div>"; }
                    rgSetHtml += html;
                    if (rgSetBtnsHtml.below !== "") { rgSetHtml += "<div class=\"" + CLS.RepGrpCtrlBtns + " " + CLS.RepGrpCtrlBtns + "_below\">" + rgSetBtnsHtml.below + "</div>"; }
                    rgSetHtml += "</fieldset></div>";
                    
                    html = rgSetHtml;
                    break;
                    
                case 'pair':
                    var pairMods = GetModsDict((KEY.mods in target ? target[KEY.mods] : []));
                    var pairAugHtml = GetAugmentHtml(pairMods);
                    if ((MOD.AddClassToPair in pairMods) && (KEY.param in pairMods[MOD.AddClassToPair])) { classes.push(pairMods[MOD.AddClassToPair][KEY.param]); }

                    classes.push(CLS.Pair);
                    attrs.push(GetAttr('class', classes.join(' ')));

                    var inFieldset = ((target[KEY.type] === "radio") || (target[KEY.type] === "checkbox"));
                    
                    var pairHtml = "<div " + attrs.join(' ') + ">";
                    if (pairAugHtml.above !== "") { pairHtml += "<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlAbove + "'>" + pairAugHtml.above + "</div>"; }
                    if (inFieldset) { pairHtml += "<fieldset " + fieldsetAttrs.join(' ') + ">"; }
                    pairHtml += html;
                    if (inFieldset) { pairHtml += "</fieldset>"; }
                    if (pairAugHtml.below !== "") { pairHtml += "<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlBelow + "'>" + pairAugHtml.below + "</div>"; }
                    pairHtml += "</div>";
                    
                    html = pairHtml;
                    break;
                    
                case 'group':
                    classes.push(CLS.Group);
                    attrs.push(GetAttr('class', classes.join(' ')));
                    
                    var groupBtnsHtml = GetRepGrpCtrlButtonsHtml(target, true, pack);
                    var groupHtml = "<div " + attrs.join(' ') + ">";
                    if (groupBtnsHtml.above !== "") { groupHtml += "<div class=\"" + CLS.RepGrpBtns + " " + CLS.RepGrpBtns + "_above\">" + groupBtnsHtml.above + "</div>"; }
                    groupHtml += "<div class=\"" + CLS.RepGrpSets + "\">" + html + "</div>";
                    if (groupBtnsHtml.below !== "") { groupHtml += "<div class=\"" + CLS.RepGrpBtns + " " + CLS.RepGrpBtns + "_below\">" + groupBtnsHtml.below + "</div>"; }
                    groupHtml += "</div>";
                    html = groupHtml;
                    break;
                    
                case 'label':
                    var labelMods = GetModsDict((KEY.mods in target ? target[KEY.mods] : []));
                    var labelAugHtml = GetAugmentHtml(labelMods);
                    if ((MOD.AddClassToLabelContainer in labelMods) && (KEY.param in labelMods[MOD.AddClassToLabelContainer])) { classes.push(labelMods[MOD.AddClassToLabelContainer][KEY.param]); }

                    classes.push(CLS.Label);
                    attrs.push(GetAttr('class', classes.join(' ')));
                    
                    var labelHtml = "<div " + attrs.join(' ') + ">";
                    if (labelAugHtml.label_above !== "") { labelHtml += "<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlLabelAbove + "'>" + labelAugHtml.label_above + "</div>"; }
                    labelHtml += html;
                    if (labelAugHtml.label_below !== "") { labelHtml += "<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlLabelBelow + "'>" + labelAugHtml.label_below + "</div>"; }
                    labelHtml += "</div>";
                    
                    html = labelHtml;
                    break;
                    
                case 'field':
                    var fieldMods = GetModsDict((KEY.mods in target ? target[KEY.mods] : []));
                    var fieldAugHtml = GetAugmentHtml(fieldMods);
                    if ((MOD.AddClassToFieldContainer in fieldMods) && (KEY.param in fieldMods[MOD.AddClassToFieldContainer])) { classes.push(fieldMods[MOD.AddClassToFieldContainer][KEY.param]); }

                    classes.push(CLS.Field);
                    attrs.push(GetAttr('class', classes.join(' ')));
                    
                    var fieldHtml = "<div " + attrs.join(' ') + ">";
                    if (fieldAugHtml.field_above !== "") { fieldHtml += "<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlFieldAbove + "'>" + fieldAugHtml.field_above + "</div>"; }
                    fieldHtml += html;
                    if (fieldAugHtml.field_below !== "") { fieldHtml += "<div class='" + CLS.AugmentHtml + " " + CLS.AugmentHtmlFieldBelow + "'>" + fieldAugHtml.field_below + "</div>"; }
                    fieldHtml += "</div>";
                    
                    html = fieldHtml;
                    break;
                    
                default:
            }
        }
        
        return html;
    }
    
    // PAIR HTML
    function GetPairHtml(field, setFormKeys, setKey, inRepGrp, pack) {
        var contHtml = "";
        
        if ((KEY.key in field) && (KEY.type in field)) {
        
            // FIELD HTML
            var fieldDict;
            var fieldTypeFound = true;
            
            // CLASSES
            var fieldClassList = [];
            var pairClassList = [];
            var labelClassList = [];
            fieldClassList.push(CLS.KeyPrefix + field[KEY.key]);
            labelClassList.push(CLS.KeyPrefix + field[KEY.key]);
            pairClassList.push(CLS.FieldTypePrefix + field[KEY.type]);
            pairClassList.push(CLS.ContainsFieldPrefix + field[KEY.key]);
            if (inRepGrp) { fieldClassList.push(CLS.InRepGrp); }
            
            // CONTAINER ATTRIBUTES
            var contAttrs = [];
            
            // FIELD MODS
            var fieldModsDict = {};
            if (KEY.mods in field) { fieldModsDict = GetModsDict(field[KEY.mods]); }
            
            // REQUIRED MODIFIER
            var requiredString = "";
            if ((MOD.Req in fieldModsDict) || (MOD.ReqCustom in fieldModsDict)) { requiredString = pack.LabelRequiredString; }
            
            // ADDCLASS MODIFIER
            if ((MOD.AddClass in fieldModsDict) && (KEY.param in fieldModsDict[MOD.AddClass])) { pairClassList.push(fieldModsDict[MOD.AddClass][KEY.param]); }
            
            // DATA ATTRIBUTES MODIFIER
            if ((MOD.AddDataAttrs in fieldModsDict) && (KEY.params in fieldModsDict[MOD.AddDataAttrs])) { contAttrs = GetDataAttributsFromParams(fieldModsDict[MOD.AddDataAttrs][KEY.params]); }
            
            // FIELD LABEL POSITION
            var labelPosition = pack.LabelPosition;
            if (KEY.label_position in field) { labelPosition = field[KEY.label_position]; }
            fieldClassList.push(CLS.LabelPositionPrefix + labelPosition);
            labelClassList.push(CLS.LabelPositionPrefix + labelPosition);
            
            // FORM INDEXES
            var fieldFormKeys = setFormKeys.slice(0);
            fieldFormKeys.push(setKey, field[KEY.key]);
            
            // FIRST CHECK FOR CUSTOM FIELD/OVERRIDE, THEN MOVE TO STANDARD FIELDS
            if (field[KEY.type] in pack.CustomFields) { fieldDict = pack.CustomFields[field[KEY.type]](field, fieldClassList, fieldModsDict, pack); }
            else {
                switch (field[KEY.type]) {
                    case "text": fieldDict = GetTextFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "textarea": fieldDict = GetTextareaFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "select": fieldDict = GetSelectFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "radio": fieldDict = GetRadioFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "checkbox": fieldDict = GetCheckboxFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "password": fieldDict = GetPasswordFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "hidden":
                        fieldDict = GetHiddenFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack);
                        pairClassList.push(CLS.ContainsHiddenField);
                        break;
                    
                    case "number": // USE TEXT FIELD UNTIL SUPPORTED PROPERLY BY MORE BROWSERS
                        fieldClassList.push(CLS.Field + "_input_number");
                        fieldDict = GetTextFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack);
                        break;
                        
                    case "date": fieldDict = GetDateFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "datetime": fieldDict = GetDateFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "datetime-local": fieldDict = GetDateFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    
                    case "button": fieldDict = GetButtonFieldDict(field, fieldClassList, fieldModsDict, fieldFormKeys, pack); break;
                    case "html":
						fieldDict = GetHtmlFieldDict(field, fieldModsDict);
						pairClassList.push(CLS.ContainsHtmlField);
						break;
                    
                    case "repeatablegroup":
                        fieldDict = {
                            FieldCont: 'group',
                            FieldAttrs: [],
                            FieldClassList: fieldClassList,
                            WidthFill: true,
                            Html: GetFieldSetsHtml(field, fieldFormKeys, true, pack),
                            FieldContClassList: [],
                            LabelContClassList: [],
                            PairContClassList: [ CLS.ContainsGroup ]
                        };
                        contAttrs.push(GetDAttr(ATTR.DATA_FormKeys, fieldFormKeys));
                        fieldDict = ProcessSharedMods([], fieldModsDict, fieldDict);
                        break;
                    
                    default:
                        if (HTML5_FIELD_TYPES.indexOf(field[KEY.type]) !== -1) { fieldDict = GetHtml5FieldDict(field[KEY.type], true, field, fieldClassList, fieldModsDict, fieldFormKeys, pack); }
                        else { fieldTypeFound = false; }
                        break;
                }
            }
            
            // CHECK FIELD SHOW SETTING
            if ((KEY.show in field) && (field[KEY.show] === "false")) { pairClassList.push(CLS.Unshown); }
            
            // RENDER FIELD
            var pairHtml = "";
            if (fieldTypeFound) {
                var labelHtml = { above: "", right: "", below: "", left: "" };
                labelHtml[labelPosition] = GetLabelHtml(field, requiredString, labelClassList.concat(fieldDict.LabelContClassList), fieldModsDict, fieldFormKeys, pack);

                // FIELD HTML
                if (MOD.CharCounter in fieldModsDict) { fieldDict.Html += "<span class=\"" + CLS.CharCounterText + "\">0 characters</span>"; }
                if (MOD.WordCounter in fieldModsDict) { fieldDict.Html += "<span class=\"" + CLS.WordCounterText + "\">0 words</span>"; }
                pairHtml += labelHtml.above + labelHtml.left + labelHtml.right;
                pairHtml += ContainerWrap(fieldDict.FieldCont, field, 0, fieldClassList.concat(fieldDict.FieldContClassList), contAttrs, [], fieldDict.Html, pack);
                pairHtml += labelHtml.below;
                
                pairClassList = pairClassList.concat(fieldDict.PairContClassList);
            
            } else { pairHtml = "<p style='color: red; text-align: center;'>OH, SNAP! The field type, \"" + field[KEY.type] + "\" was not found so this field cannot be rendered.</p>"; }
            
            var fieldsetAttrs = [];
            if ("FieldsetAttrs" in fieldDict) { fieldsetAttrs = fieldDict.FieldsetAttrs; }
                
            contHtml = ContainerWrap('pair', field, 0, pairClassList, [], fieldsetAttrs, pairHtml, pack);
        }
        
        return contHtml;
    }
    
    // LABEL HTML
    function GetLabelHtml(field, requiredString, classes, modsDict, formKeys, pack) {
        var contHtml = "";
        
        // DO NOT RENDER ANYTHING IF NO LABEL SPECIFIED
        if (KEY.label in field) {
            var labelClasses = [];
            var labelAttrs = [];
            
            // INFO BUBBLE
            var infoBubHtml = "";
            if (MOD.InfoBub in modsDict) {
                try {
                    var paramsDict = GetParamsDict(modsDict[MOD.InfoBub][KEY.params]);
                    var icon = ('icon' in paramsDict ? paramsDict.icon : pack.InfoBubbleIcon);
                    if (icon !== "") {
                        infoBubHtml = "<span class=\"" + CLS.InfoBub + "\">";
                        infoBubHtml += "<img class=\"" + CLS.InfoBub + "\" src=\"" + icon + "\" alt=\"Additional Info Icon\" />";
                        infoBubHtml += "<span>" + paramsDict.html + "</span>";
                        infoBubHtml += "</span>";
                    }

                } catch (e) { if (window.console) { console.log("JFS Error: Error parsing info bubble modifier.", formKeys, e); } }
            }
        
            // SUFFIX
            var suffix = pack.LabelSuffix;
            if (MOD.LabelSuffix in modsDict) {
                try { suffix = modsDict[MOD.LabelSuffix][KEY.param]; }
                catch (e) { if (window.console) { console.log("JFS Error: Error parsing label suffix modifier.", formKeys, e); } }
            }
        
            // CONTENTS (NEEDS TO SUPPORT PHRASING CONTENT)
            var labelHtml = field[KEY.label] + suffix;
            var labelText = jQuery("<div/>").html(field[KEY.label]).text();

            // REQUIRED
            if (requiredString !== "") {
                classes.push(CLS.Req);
                var prepend = pack.LabelRequiredPrepend;
                if (MOD.ReqPrepend in modsDict) {
                    try { prepend = (modsDict[MOD.ReqPrepend][KEY.param] === "true"); }
                    catch (e) { if (window.console) { console.log("JFS Error: Error parsing lable required prepend modifier.", formKeys, e); } }
                }

                if (prepend) {
                    labelHtml = requiredString + labelHtml;
                    labelText = requiredString + labelText;
                
                } else {
                    labelHtml += requiredString;
                    labelText += requiredString;
                }
            }
			
			labelHtml += infoBubHtml;

            if ((MOD.AddClassToLabel in modsDict) && (KEY.param in modsDict[MOD.AddClassToLabel])) { labelClasses.push(modsDict[MOD.AddClassToLabel][KEY.param]); }

            labelAttrs.push(GetAttr('class', labelClasses.join(' ')));
            
            // HTML (NOTE: RADIOS AND CHECKBOXES GET LEGENDS INSTEAD BECAUSE LABELS ARE ONLY FOR INDIVIDUAL INPUTS)
            if ((field[KEY.type] === "radio") || (field[KEY.type] === "checkbox")) { labelHtml = "<legend " + labelAttrs.join(' ') + ">" + labelHtml + "</legend>"; }
            else if (field[KEY.type] === "repeatablegroup") { labelHtml = "<p " + labelAttrs.join(' ') + ">" + labelHtml + "</p>"; }
            else { labelHtml = "<label for=\"" + GetFieldId(formKeys, pack) + "\" " + labelAttrs.join(' ') + ">" + labelHtml + "</label>"; }
            
            contHtml = ContainerWrap('label', field, 0, classes, [], [], labelHtml, pack);
        }
        
        return contHtml;
    }
    
    // AUGMENT HTML
    function GetAugmentHtml(mods) {
        var dict = { above: "", below: "", label_above: "", label_below: "", field_above: "", field_below: "" };
        if ((MOD.AugmentHtml in mods) && (KEY.params in mods[MOD.AugmentHtml])) {
            var params = mods[MOD.AugmentHtml][KEY.params];
            for (var p = 0; p < params.length; p++) {
                if ((KEY.key in params[p]) && (KEY.param in params[p])) {
                    switch(params[p][KEY.key]) {
                        case "html_above": dict.above = params[p][KEY.param]; break;
                        case "html_below": dict.below = params[p][KEY.param]; break;
                        case "html_label_above": dict.label_above = params[p][KEY.param]; break;
                        case "html_label_below": dict.label_below = params[p][KEY.param]; break;
                        case "html_field_above": dict.field_above = params[p][KEY.param]; break;
                        case "html_field_below": dict.field_below = params[p][KEY.param]; break;
                        default:
                    }
                }
            }
        }
        return dict;
    }
    
    // REPEATABLE GROUP BUTTONS HTML
    function GetRepGrpCtrlButtonsHtml(target, setBtns, pack) {
        var html = { above: "", below: ""};
        if (KEY.control_btns in target) {
            var btnList = target[KEY.control_btns];
            for (var b = 0; b < btnList.length; b++) {
                try {
                    if (KEY.key in btnList[b]) {
                        var dict = btnList[b];
                        var type = dict[KEY.key];
                        var pos = "above";
                        var label = "";
                        var title = "";
                        var icon = "";
                        var iconLabelPos = pack.IconLabelPosition;
                        var addLoc = "append";
                        var isAddBtn = (type === "add");
                        
                        // SKIP BUTTONS, DEPENDING ON TYPE
                        if (setBtns) { if (!isAddBtn) { continue; } }
                        else { if (isAddBtn) { continue; } }
                        
                        if (type in pack.RepeatableGroupIcons) { icon = pack.RepeatableGroupIcons[type]; }
                        
                        // BUTTON PARAMS
                        if (KEY.params in dict) {
                            var params = dict[KEY.params];
                            for (var p = 0; p < params.length; p++) {
                                var param = params[p][KEY.param];
                                switch(params[p][KEY.key]) {
                                    case "add_location": addLoc = param; break;
                                    case "btn_position": pos = param; break;
                                    case "label": label = param; break;
                                    case "title": title = param; break;
                                    case "icon": icon = param; break;
                                    case "icon_label_position": iconLabelPos = param; break;
                                    default:
                                }
                            }
                        }
                        
                        // BUTTON TITLE
                        if (title === "") {
                            switch(type) {
                                case "add": title = "Add"; break;
                                case "remove": title = "Remove"; break;
                                case "up": title = "Move Up"; break;
                                case "down": title = "Move Down"; break;
                                case "drag": title = "Drag to Reposition"; break;
                                default: title = "Button"; break;
                            }
                        }
                        
                        // BUTTON CLASSES
                        var classes = [];
                        classes.push(CLS.RepGrpBtn);
                        classes.push(CLS.RepGrpBtn + "_" + type);
                        
                        // STANDARD BUTTON ATTRIBUTES
                        var attrs = [];
                        attrs.push(GetAttr('title', title));
                        if (isAddBtn) { attrs.push(GetDAttr(ATTR.DATA_RepGrpBtnAddLoc, addLoc)); }
                        
                        // BUTTON INNER HTML
                        var inner = "";
                        var iconHtml = "";
                        if (label !== "") { classes.push(CLS.RepGrpBtn + "_label_" + iconLabelPos); }
                        if (icon !== "") {
                            iconHtml = "<img src='" + icon + "' " + GetAttr('alt', "Icon: " + title) + "/>";
                            classes.push(CLS.RepGrpBtn + "_icon");
                        }
                        if (iconLabelPos === "left") { inner = label + iconHtml; }
                        else { inner = iconHtml + label; }
                        
                        attrs.push(GetAttr('class', classes.join(' ')));

                        // DRAG IS A SPAN, ALSO ONLY SHOW IF JQUERY UI DETECTED AND FOR NON-TOUCH INTERFACES
                        if ((type === "drag") && (typeof jQuery.ui !== 'undefined') && (pack.Interface = INTERFACE_TYPES[0])) {
                            html[pos] += "<span " + attrs.join(' ') + ">" + inner + "</span>";
                        
                        } else {
                            attrs.push(GetAttr('type', 'button'));
                            html[pos] += "<button " + attrs.join(' ') + ">" + inner + "</button>";
                        }
                    }
                
                } catch (e) { if (window.console) { console.log("JFS Error: Error parsing repeatable group buttons.", target, e); } }
            }
        }
        
        return html;
    }
    
  // FIELD TYPES ////////////////////////////////////////////////////////////////////////////////////
    // TEXT FIELD
    function GetTextFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: true, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        
        // BASE FIELD ATTRS
        dict.FieldAttrs.push(GetAttr('id', GetFieldId(formKeys, pack)));
        dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', 'text'));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        if (KEY.title in field) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if (KEY.disabled in field && (field[KEY.disabled] === "true")) { dict.FieldAttrs.push(ATTR.Disabled); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.placeholder in field) { dict.FieldAttrs.push(GetAttr(ATTR.PlaceHolder, field[KEY.placeholder])); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (KEY.autocomplete in field) { dict.FieldAttrs.push(GetAttr(ATTR.AutoComplete, (field[KEY.autocomplete] === "true" ? "on" : "off"))); }
        if (pack.UseHtml5Required && (MOD.Req in modsDict)) { dict.FieldAttrs.push(ATTR.Required); }
        if (KEY.field_value in field) { dict.FieldAttrs.push(GetAttr('value', field[KEY.field_value])); }
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap, MOD.Length, MOD.AllowChars, MOD.PreventChars, MOD.CharCounter, MOD.WordCounter ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        // FIELD HTML
        var btnsHtml = GetBtnsHtml(formKeys, modsDict, true, pack);
        dict.Html += btnsHtml.above + btnsHtml.left + btnsHtml.right + GetFieldHtml("input", pack, dict.FieldClassList.concat(fieldTagClassList), dict.FieldAttrs, dict.WidthFill) + btnsHtml.below;
        
        return dict;
    }
    
    // TEXTAREA FIELD
    function GetTextareaFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: true, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        var val = "";
        
        // BASE FIELD ATTRS
        dict.FieldAttrs.push(GetAttr('id', GetFieldId(formKeys, pack)));
        dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', 'textarea'));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        if (KEY.title in field) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if (KEY.disabled in field && (field[KEY.disabled] === "true")) { dict.FieldAttrs.push(ATTR.Disabled); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.placeholder in field) { dict.FieldAttrs.push(GetAttr(ATTR.PlaceHolder, field[KEY.placeholder])); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (pack.UseHtml5Required && (MOD.Req in modsDict)) { dict.FieldAttrs.push(ATTR.Required); }
        if (KEY.field_value in field) { val = field[KEY.field_value]; }
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap, MOD.Length, MOD.AllowChars, MOD.PreventChars, MOD.CharCounter, MOD.WordCounter ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        // FIELD HTML
        var btnsHtml = GetBtnsHtml(formKeys, modsDict, true, pack);
        dict.Html += btnsHtml.above + btnsHtml.left + btnsHtml.right + GetFieldHtml("textarea", pack, dict.FieldClassList.concat(fieldTagClassList), dict.FieldAttrs, dict.WidthFill, val) + btnsHtml.below;
        
        return dict;
    }
    
    // SELECT FIELD
    function GetSelectFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: true, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        var val = "";
        
        // BASE FIELD ATTRS
        dict.FieldAttrs.push(GetAttr('id', GetFieldId(formKeys, pack)));
        dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', 'select'));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        if (KEY.title in field) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if (KEY.disabled in field && (field[KEY.disabled] === "true")) { dict.FieldAttrs.push(ATTR.Disabled); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (pack.UseHtml5Required && (MOD.Req in modsDict)) { dict.FieldAttrs.push(ATTR.Required); }
        if (KEY.field_value in field) { val = field[KEY.field_value]; }
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        // OPTIONS
        var optsHtml = "";
        if (KEY.options in field) {
            var optsObj = field[KEY.options];
            // OPTIONS DEFINED EXTERNALLY
            if (typeof optsObj === 'string' ) {
                if (optsObj in pack.CustomInputOptions) { optsHtml = GetSelectOptionsHtml(pack.CustomInputOptions[optsObj](GetCurrentFormValues(pack).Values, pack), val); }
                else if (optsObj in pack.PreDefindedOptionsDict) { optsHtml = GetSelectOptionsHtml(pack.PreDefindedOptionsDict[optsObj], val); }
            
            // STANDARD OPTIONS
            } else { optsHtml = GetSelectOptionsHtml(optsObj, val); }
        
        } else if (KEY.options_predefined in field) {
            var preDefKey = field[KEY.options_predefined];
            if (preDefKey in pack.CustomInputOptions) { optsHtml = GetSelectOptionsHtml(pack.CustomInputOptions[preDefKey](GetCurrentFormValues(pack).Values, pack), val); }
            else if (preDefKey in pack.PreDefindedOptionsDict) { optsHtml = GetSelectOptionsHtml(pack.PreDefindedOptionsDict[preDefKey], val); }
        }
        
        // FIELD HTML
        var btnsHtml = GetBtnsHtml(formKeys, modsDict, true, pack);
        dict.Html += btnsHtml.above + btnsHtml.left + btnsHtml.right + GetFieldHtml("select", pack, dict.FieldClassList.concat(fieldTagClassList), dict.FieldAttrs, dict.WidthFill, optsHtml) + btnsHtml.below;
        
        return dict;
    }
    
    // RADIO FIELD
    function GetRadioFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: false, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [], FieldsetAttrs: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        var val = "";
        
        // BASE FIELD ATTRS
        var idPrefix = GetFieldId(formKeys, pack);
        dict.FieldAttrs.push(GetAttr('type', 'radio'));
        if (KEY.title in field) { dict.FieldsetAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (KEY.field_value in field) { val = field[KEY.field_value]; }
        dict.FieldContClassList.push(CLS.Field + "_radio");
        var allOptionsDisabled = (KEY.disabled in field && (field[KEY.disabled] === "true"));
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        // RADIOS INLINE?
        var inline = pack.InlineOptions;
        if (KEY.inline in field) { inline = (field[KEY.inline] === "true"); }
        
        // RADIO LABEL POSITION
        var labelPosition = pack.OptionLabelPosition;
        if (KEY.option_label_position in field) { labelPosition = field[KEY.option_label_position]; }
        
        // OPTIONS
        var optsObj = [];
        if (KEY.options in field) {
            optsObj = field[KEY.options];
            
            // IF OPTIONS DEFINED EXTERNALLY
            if (typeof optsObj === 'string' ) {
                if (optsObj in pack.CustomInputOptions) { optsObj = pack.CustomInputOptions[optsObj](GetCurrentFormValues(pack).Values, pack); }
                else if (optsObj in pack.PreDefindedOptionsNoEmptyDict) { optsObj = pack.PreDefindedOptionsNoEmptyDict[optsObj]; }
            }
            
        } else if (KEY.options_predefined in field) {
            var preDefKey = field[KEY.options_predefined];
            if (preDefKey in pack.CustomInputOptions) { optsObj = pack.CustomInputOptions[preDefKey](GetCurrentFormValues(pack).Values, pack); }
            else if (preDefKey in pack.PreDefindedOptionsNoEmptyDict) { optsObj = pack.PreDefindedOptionsNoEmptyDict[preDefKey]; }
        }
            
        // ITERATE THROUGH RADIOS
        for (var i = 0; i < optsObj.length; i++) {
            var optDict = optsObj[i];
            var labelClassList = [];
            
            // RADIO LABEL
            var labelHtml = { above: "", right: "", below: "", left: "" };
            labelHtml[labelPosition] = "<span>" + optDict[KEY.label] + "</span>"; // ADD A SPAN HERE SO WE CAN TARGET JUST THE TEXT
            labelClassList.push(CLS.RadioLabel);
            labelClassList.push(CLS.RadioLabel + "_" + labelPosition);
            
            // RADIO ATTRIBUTES
            var optAttrs = dict.FieldAttrs.slice(0);
            var optInds = formKeys.slice(0);
            var optLoc = formKeys.slice(0);
            optInds.push(i);
            optLoc.push(i);
            
            // RADIO MODIFIERS
            var optModsDict = {};
            if (KEY.mods in optDict) { optModsDict = GetModsDict(optDict[KEY.mods]); }
            if ((MOD.AddClass in optModsDict) && (KEY.param in optModsDict[MOD.AddClass])) { labelClassList.push(optModsDict[MOD.AddClass][KEY.param]); }
            if ((MOD.AddDataAttrs in optModsDict) && (KEY.params in optModsDict[MOD.AddDataAttrs])) { optAttrs = optAttrs.concat(GetDataAttributsFromParams(optModsDict[MOD.AddDataAttrs][KEY.params])); }
            
            // INLINE RADIO
            if (inline) { labelClassList.push(CLS.InlineOpt); }
            else { labelClassList.push(CLS.BlockOpt); }

            // OPTION NAME
            var optNameArray = formKeys.slice(1); // REMOVE SET KEY
            var optName = (optNameArray.length > 1 ? optNameArray[optNameArray.length - 2] + "_" + field[KEY.key] : field[KEY.key]); // IF IN A REPGROUP WE NEED GROUP INDEX SO MULTIPLES DON'T SHARE THE SAME NAME
            
            optAttrs.push(GetDAttr(ATTR.DATA_FormKeys, optLoc));
            optAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
            optAttrs.push(GetAttr('id', idPrefix + "_" + parseInt(i + 1)));
            optAttrs.push(GetAttr('name', optName));
            optAttrs.push(GetAttr('value', optDict[KEY.value]));
            
            var optDisabled = allOptionsDisabled;
            if (KEY.disabled in optDict) { optDisabled = (optDict[KEY.disabled] === "true"); }
            if (optDisabled) { optAttrs.push(ATTR.Disabled); }
            
            if (pack.UseHtml5Required && (MOD.Req in modsDict)) { optAttrs.push(ATTR.Required); }
            if (optDict[KEY.value] === val) { optAttrs.push(ATTR.Checked); }
            
            // FINAL HTML
            dict.Html += "<label " + GetAttr('class', labelClassList.join(' ')) + ">";
            dict.Html += labelHtml.left + labelHtml.above + GetFieldHtml("input", pack, dict.FieldClassList.concat(fieldTagClassList), optAttrs, dict.WidthFill) + labelHtml.right + labelHtml.below;
            dict.Html += "</label>";
        }
        
        return dict;
    }
    
    // CHECKBOX FIELD
    function GetCheckboxFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: false, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [], FieldsetAttrs: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        var val = [];
        
        // BASE FIELD ATTRS
        var idPrefix = GetFieldId(formKeys, pack);
        //dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', 'checkbox'));
        if (KEY.title in field) { dict.FieldsetAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (KEY.field_value in field) { val = field[KEY.field_value].split(SEP.Checkbox_Value); }
        dict.FieldContClassList.push(CLS.Field + "_checkbox");
        var allOptionsDisabled = (KEY.disabled in field && (field[KEY.disabled] === "true"));
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        // CHECKBOXES INLINE?
        var inline = pack.InlineOptions;
        if (KEY.inline in field) { inline = (field[KEY.inline] === "true"); }
        
        // CHECKBOX LABEL POSITION
        var labelPosition = pack.OptionLabelPosition;
        if (KEY.option_label_position in field) { labelPosition = field[KEY.option_label_position]; }
        
        // OPTIONS
        var optsObj = [];
        if (KEY.options in field) {
            optsObj = field[KEY.options];
            
            // IF OPTIONS DEFINED EXTERNALLY
            if (typeof optsObj === 'string' ) {
                if (optsObj in pack.CustomInputOptions) { optsObj = pack.CustomInputOptions[optsObj](GetCurrentFormValues(pack).Values, pack); }
                else if (optsObj in pack.PreDefindedOptionsNoEmptyDict) { optsObj = pack.PreDefindedOptionsNoEmptyDict[optsObj]; }
            }
            
        } else if (KEY.options_predefined in field) {
            var preDefKey = field[KEY.options_predefined];
            if (preDefKey in pack.CustomInputOptions) { optsObj = pack.CustomInputOptions[preDefKey](GetCurrentFormValues(pack).Values, pack); }
            else if (preDefKey in pack.PreDefindedOptionsNoEmptyDict) { optsObj = pack.PreDefindedOptionsNoEmptyDict[preDefKey]; }
        }
        
        // ITERATE THROUGH CHECKBOXES
        for (var i = 0; i < optsObj.length; i++) {
            var optDict = optsObj[i];
            var labelClassList = [];
            
            // CHECKBOX LABEL
            var labelHtml = { above: "", right: "", below: "", left: "" };
            labelHtml[labelPosition] = "<span>" + optDict[KEY.label] + "</span>"; // ADD A SPAN HERE SO WE CAN TARGET JUST THE TEXT
            labelClassList.push(CLS.CheckboxLabel);
            labelClassList.push(CLS.CheckboxLabel + "_" + labelPosition);
            
            // CHECKBOX ATTRIBUTES
            var optAttrs = dict.FieldAttrs.slice(0);
            var optInds = formKeys.slice(0);
            var optLoc = formKeys.slice(0);
            optInds.push(i);
            optLoc.push(i);
            
            // CHECKBOX MODIFIERS
            var optModsDict = {};
            if (KEY.mods in optDict) { optModsDict = GetModsDict(optDict[KEY.mods]); }
            if ((MOD.AddClass in optModsDict) && (KEY.param in optModsDict[MOD.AddClass])) { labelClassList.push(optModsDict[MOD.AddClass][KEY.param]); }
            if ((MOD.AddDataAttrs in optModsDict) && (KEY.params in optModsDict[MOD.AddDataAttrs])) { optAttrs = optAttrs.concat(GetDataAttributsFromParams(optModsDict[MOD.AddDataAttrs][KEY.params])); }
            
            // INLINE CHECKBOX
            if (inline) { labelClassList.push(CLS.InlineOpt); }
            else { labelClassList.push(CLS.BlockOpt); }

            // OPTION NAME
            var optNameArray = formKeys.slice(1); // REMOVE SET KEY
            var optName = (optNameArray.length > 1 ? optNameArray[optNameArray.length - 2] + "_" + field[KEY.key] : field[KEY.key]); // IF IN A REPGROUP WE NEED GROUP INDEX SO MULTIPLES DON'T SHARE THE SAME NAME
            
            optAttrs.push(GetDAttr(ATTR.DATA_FormKeys, optLoc));
            optAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
            optAttrs.push(GetAttr('id', idPrefix + "_" + parseInt(i + 1)));
            optAttrs.push(GetAttr('name', optName));
            optAttrs.push(GetAttr('value', optDict[KEY.value]));

            var optDisabled = allOptionsDisabled;
            if (KEY.disabled in optDict) { optDisabled = (optDict[KEY.disabled] === "true"); }
            if (optDisabled) { optAttrs.push(ATTR.Disabled); }
            
            if (pack.UseHtml5Required && (MOD.Req in optModsDict)) { optAttrs.push(ATTR.Required); }
            if (val.indexOf(optDict[KEY.value]) !== -1) { optAttrs.push(ATTR.Checked); }
            
            // FINAL HTML
            dict.Html += "<label " + GetAttr('class', labelClassList.join(' ')) + ">";
            dict.Html += labelHtml.left + labelHtml.above + GetFieldHtml("input", pack, dict.FieldClassList.concat(fieldTagClassList), optAttrs, dict.WidthFill) + labelHtml.right + labelHtml.below;
            dict.Html += "</label>";
        }
        
        return dict;
    }
    
    // PASSWORD FIELD
    function GetPasswordFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: true, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        
        // BASE FIELD ATTRS
        dict.FieldAttrs.push(GetAttr('id', GetFieldId(formKeys, pack)));
        dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', 'password'));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        if (KEY.title in field) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if (KEY.disabled in field && (field[KEY.disabled] === "true")) { dict.FieldAttrs.push(ATTR.Disabled); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (KEY.autocomplete in field) { dict.FieldAttrs.push(GetAttr(ATTR.AutoComplete, (field[KEY.autocomplete] === "true" ? "on" : "off"))); }
        if (pack.UseHtml5Required && (MOD.Req in modsDict)) { dict.FieldAttrs.push(ATTR.Required); }
        if (pack.UseLabelsAsFieldTitles && (KEY.label in field) && (field[KEY.label] !== "")) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.label])); }
        if (KEY.field_value in field) { dict.FieldAttrs.push(GetAttr('value', field[KEY.field_value])); }
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap, MOD.Length, MOD.AllowChars, MOD.PreventChars ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        // FIELD HTML
        var btnsHtml = GetBtnsHtml(formKeys, modsDict, true, pack);
        dict.Html += btnsHtml.above + btnsHtml.left + btnsHtml.right + GetFieldHtml("input", pack, dict.FieldClassList.concat(fieldTagClassList), dict.FieldAttrs, dict.WidthFill) + btnsHtml.below;
        
        return dict;
    }
    
    // HIDDEN FIELD
    function GetHiddenFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: false, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        
        // BASE FIELD ATTRS
        dict.FieldAttrs.push(GetAttr('id', GetFieldId(formKeys, pack)));
        dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', 'hidden'));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.field_value in field) { dict.FieldAttrs.push(GetAttr('value', field[KEY.field_value])); }
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        // FIELD HTML
        dict.Html += GetFieldHtml("input", pack, dict.FieldClassList.concat(fieldTagClassList), dict.FieldAttrs, dict.WidthFill);
        
        return dict;
    }
    
    // DATE FIELDS (SINCE BROWSER SUPPORT IS INCONSISTENT WE JUST USE A TEXT FIELD WITH JQUERY UI DATE/TIME PICKER)
    function GetDateFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: true, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        
        // BASE FIELD ATTRS
        dict.FieldAttrs.push(GetAttr('id', GetFieldId(formKeys, pack)));
        dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', 'text'));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        if (KEY.title in field) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if (KEY.disabled in field && (field[KEY.disabled] === "true")) { dict.FieldAttrs.push(ATTR.Disabled); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.placeholder in field) { dict.FieldAttrs.push(GetAttr(ATTR.PlaceHolder, field[KEY.placeholder])); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (pack.UseHtml5Required && (MOD.Req in modsDict)) { dict.FieldAttrs.push(ATTR.Required); }
        if (pack.UseLabelsAsFieldTitles && (KEY.label in field) && (field[KEY.label] !== "")) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.label])); }
        if (KEY.field_value in field) { dict.FieldAttrs.push(GetAttr('value', field[KEY.field_value])); }
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        switch(field[KEY.type]) {
            case "date": dict.FieldClassList.push(CLS.Date); break;
            case "datetime": dict.FieldClassList.push(CLS.DateTime); break;
            case "datetime-local": dict.FieldClassList.push(CLS.DateTimeLocal); break;
        }
        
        // PICKER PARAMS
        var paramDict = {};
        jQuery.each(modsDict, function(key,val) {
            var paramVal = val[KEY.param];
            if (KEY.type in val) {
                if (val[KEY.type] === "int") { paramVal = parseInt(paramVal); }
                if (val[KEY.type] === "bool") { paramVal = (paramVal.toLowerCase() === 'true'); }
            }
            paramDict[key] = paramVal;
        });
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_DTPicker, paramDict));
        
        // FIELD HTML
        dict.Html += GetFieldHtml("input", pack, dict.FieldClassList.concat(fieldTagClassList), dict.FieldAttrs, dict.WidthFill);
        
        return dict;
    }
    
    // BUTTON FIELD
    function GetButtonFieldDict(field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: true, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        
        // BASE FIELD ATTRS
        dict.FieldAttrs.push(GetAttr('id', GetFieldId(formKeys, pack)));
        dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', 'button'));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        if (KEY.title in field) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if (KEY.disabled in field && (field[KEY.disabled] === "true")) { dict.FieldAttrs.push(ATTR.Disabled); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (pack.UseLabelsAsFieldTitles && (KEY.label in field) && (field[KEY.label] !== "")) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.label])); } // MAY BE OVERRIDDEN BELOW
        if (KEY.field_value in field) { dict.FieldAttrs.push(GetAttr('value', field[KEY.field_value])); }
        
        // BASE FIELD CLASSES
        dict.FieldClassList.push(CLS.Btn);
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        var text = "";
        var icon = "";
        var iconLabelPos = pack.IconLabelPosition;
        var funct = "";
        var functParam = "";
        try {
            if (MOD.ButtonText in modsDict) { text = modsDict[MOD.ButtonText][KEY.param]; }
            if (MOD.ButtonIcon in modsDict) { icon = modsDict[MOD.ButtonIcon][KEY.param]; }
            if (MOD.ButtonIconLabelPosition in modsDict) { iconLabelPos = modsDict[MOD.ButtonIconLabelPosition][KEY.param]; }
            if (MOD.ButtonFunction in modsDict) { funct = modsDict[MOD.ButtonFunction][KEY.param]; }
            if (MOD.ButtonFunctionParam in modsDict) { functParam = modsDict[MOD.ButtonFunctionParam][KEY.param]; }

        } catch (e) { if (window.console) { console.log("JFS Error: Error parsing button field modifiers.", formKeys, e); } }
        
        var inner = "";
        var iconHtml = "";
        if (text !== "") { dict.FieldClassList.push(CLS.Btn + "_label_" + iconLabelPos); }
        if (icon !== "") {
            iconHtml = "<img src='" + icon + "' " + GetAttr('alt', "Icon: " + ((text === "") ? "Button" : text)) + "/>";
            dict.FieldClassList.push(CLS.Btn + "_icon");
        }
        if (iconLabelPos === "left") { inner = text + iconHtml; }
        else { inner = iconHtml + text; }
        
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_BtnFunct, funct));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_BtnFunctParam, functParam));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        
        // FIELD HTML
        dict.Html += GetFieldHtml("button", pack, dict.FieldClassList.concat(fieldTagClassList), dict.FieldAttrs, dict.WidthFill, inner);
        
        return dict;
    }
    
    // REMAINING HTML5 FIELDS
    function GetHtml5FieldDict(type, allowBtns, field, fieldClassList, modsDict, formKeys, pack) {
        var dict = { FieldCont: 'field', FieldAttrs: [], FieldClassList: fieldClassList, WidthFill: true, Html: "", FieldContClassList: [], LabelContClassList: [], PairContClassList: [] };
        var fieldTagClassList = fieldClassList.slice(0);
        
        // BASE FIELD ATTRS
        dict.FieldAttrs.push(GetAttr('id', GetFieldId(formKeys, pack)));
        dict.FieldAttrs.push(GetAttr('name', field[KEY.key]));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FieldName, field[KEY.key]));
        dict.FieldAttrs.push(GetAttr('type', type));
        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
        if (KEY.title in field) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.title])); }
        if (KEY.disabled in field && (field[KEY.disabled] === "true")) { dict.FieldAttrs.push(ATTR.Disabled); }
        if ((MOD.AddClassToField in modsDict) && (KEY.param in modsDict[MOD.AddClassToField])) { fieldTagClassList.push(modsDict[MOD.AddClassToField][KEY.param]); }
        if (KEY.placeholder in field) { dict.FieldAttrs.push(GetAttr(ATTR.PlaceHolder, field[KEY.placeholder])); }
        if (KEY.autofocus in field) { dict.FieldAttrs.push(ATTR.AutoFocus); }
        if (KEY.autocomplete in field) { dict.FieldAttrs.push(GetAttr(ATTR.AutoComplete, (field[KEY.autocomplete] === "true" ? "on" : "off"))); }
        if (pack.UseHtml5Required && (MOD.Req in modsDict)) { dict.FieldAttrs.push(ATTR.Required); }
        if (pack.UseLabelsAsFieldTitles && (KEY.label in field) && (field[KEY.label] !== "")) { dict.FieldAttrs.push(GetAttr(ATTR.Title, field[KEY.label])); }
        if (KEY.field_value in field) { dict.FieldAttrs.push(GetAttr('value', field[KEY.field_value])); }
        
        // SUPPORTED MODS
        var supportedMods = [ MOD.AddClass, MOD.AddDataAttrs, MOD.WidthFillWrap ];
        dict = ProcessSharedMods(supportedMods, modsDict, dict);
        
        // RANGE ATTRIBUTES
        if (MOD.Min in modsDict) {
            try { dict.FieldAttrs.push(GetAttr('min', modsDict[MOD.Min][KEY.param])); }
            catch (e) { if (window.console) { console.log("JFS Error: Error parsing minimum modifier.", formKeys, e); } }
        }

        if (MOD.Max in modsDict) {
            try { dict.FieldAttrs.push(GetAttr('max', modsDict[MOD.Max][KEY.param])); }
            catch (e) { if (window.console) { console.log("JFS Error: Error parsing maximum modifier.", formKeys, e); } }
        }
        
        // ADD CLASS FOR BROWSERS THAT DON'T SUPPORT
        dict.FieldClassList.push(CLS.Field + "_input_" + type);
        
        // FIELD HTML
        var btnsHtml = GetBtnsHtml(formKeys, modsDict, allowBtns, pack);
        dict.Html += btnsHtml.above + btnsHtml.left + btnsHtml.right + GetFieldHtml("input", pack, dict.FieldClassList.concat(fieldTagClassList), dict.FieldAttrs, dict.WidthFill) + btnsHtml.below;
        
        return dict;
    }
    
    // HTML "FIELD"
    function GetHtmlFieldDict(field, modsDict) {
        var html = "";
        if (KEY.field_value in field) { html = field[KEY.field_value]; }
        return { FieldCont: 'field', FieldContClassList: [], LabelContClassList: [], PairContClassList: [], Html: html }
    }
    
    // PROCESS SHARED MODS
    function ProcessSharedMods(sup, mods, dict) {
        // ADDCLASS
        if ((sup.indexOf(MOD.AddClass) !== -1) && (MOD.AddClass in mods) && (KEY.param in mods[MOD.AddClass])) { dict.FieldClassList.push(mods[MOD.AddClass][KEY.param]); }
        
        // DATA ATTRIBUTES
        if ((sup.indexOf(MOD.AddDataAttrs) !== -1) && (MOD.AddDataAttrs in mods) && (KEY.params in mods[MOD.AddDataAttrs])) { dict.FieldAttrs = dict.FieldAttrs.concat(GetDataAttributsFromParams(mods[MOD.AddDataAttrs][KEY.params])); }
        
        // LENGTH
        if ((sup.indexOf(MOD.Length) !== -1) && (MOD.Length in mods)) {
            try {
                var lenDict = GetParamsDict(mods[MOD.Length][KEY.params]);
                if (MOD.Min in lenDict) { // NOTE: SWITCH TO HTML5 'pattern' WHEN SAFARI SUPPORTS
                    try { dict.FieldAttrs.push(GetDAttr(ATTR.DATA_MinLength, parseInt(lenDict[MOD.Min]))); }
                    catch (e) { if (window.console) { console.log("JFS Error: Error parsing min length status modifier.", mods, e); } }
                }
                if (MOD.Max in lenDict) { // NOTE: SWITCH TO HTML5 'pattern' WHEN SAFARI SUPPORTS
                    try { dict.FieldAttrs.push(GetAttr(ATTR.MaxLength, lenDict[MOD.Max])); }
                    catch (e) { if (window.console) { console.log("JFS Error: Error parsing max length status modifier.", mods, e); } }
                }
                if (MOD.Status in lenDict) {
                    try {
                        var status = (lenDict[MOD.Status] !== "" ? lenDict[MOD.Status] : "always");
                        dict.FieldAttrs.push(GetDAttr(ATTR.DATA_ShowStatus, status));
                    
                    } catch (e) { if (window.console) { console.log("JFS Error: Error parsing length status modifier.", mods, e); } }
                }

            } catch (e) { if (window.console) { console.log("JFS Error: Error parsing length modifiers.", mods, e); } }
        }
        if ((sup.indexOf(MOD.CharCounter) !== -1) && (MOD.CharCounter in mods)) {
            dict.FieldClassList.push(CLS.CharCounter);
            dict.FieldContClassList.push(CLS.CharCounter);
        }
        if ((sup.indexOf(MOD.WordCounter) !== -1) && (MOD.WordCounter in mods)) {
            dict.FieldClassList.push(CLS.WordCounter);
            dict.FieldContClassList.push(CLS.WordCounter);
        }
        if ((sup.indexOf(MOD.WidthFillWrap) !== -1) && (MOD.WidthFillWrap in mods)) {
            try { dict.WidthFill = (mods[MOD.WidthFillWrap][KEY.param] === "true"); }
            catch (e) { if (window.console) { console.log("JFS Error: Error parsing width fill wrap modifier.", mods, e); } }
        }

        if ((sup.indexOf(MOD.AllowChars) !== -1) && (MOD.AllowChars in mods)) {
            try { dict.FieldAttrs.push(GetDAttr(ATTR.DATA_AllowChars, mods[MOD.AllowChars][KEY.param])); }
            catch (e) { if (window.console) { console.log("JFS Error: Error parsing allow chars modifier.", mods, e); } }
        }

        if ((sup.indexOf(MOD.PreventChars) !== -1) && (MOD.PreventChars in mods)) {
            try { dict.FieldAttrs.push(GetDAttr(ATTR.DATA_PreventChars, mods[MOD.PreventChars][KEY.param])); }
            catch (e) { if (window.console) { console.log("JFS Error: Error parsing prevent chars modifier.", mods, e); } }
        }
        
        return dict;
    }
    
    // GET FIELD HTML
    function GetFieldHtml(type, pack, classes, attrs, wrap, inner) {
        var html = "";
        classes.push(CLS.Field + "_" + type);
        attrs.push(GetAttr('class', classes.join(' ')));
        if (pack.AddZeroedTabIndexes) { attrs.push(GetAttr('tabindex', '0')); }
        
        if (type === "input") { html = "<input " + attrs.join(' ') + "/>"; }
        else if (type === "textarea") { html = "<textarea " + attrs.join(' ') + ">" + HtmlSafe(inner) + "</textarea>"; }
        else if (type === "select") { html = "<select " + attrs.join(' ') + ">" + inner + "</select>"; }
        else if (type === "button") { html = "<button " + attrs.join(' ') + ">" + inner + "</button>"; }
        
        if (wrap) { html = WrapWithWidthSpan(html); }
        return html;
    }
    
    // SELECT OPTIONS HTML
    function GetSelectOptionsHtml(optsList, fieldValue) {
        var html = "";
        for (var i = 0; i < optsList.length; i++) {
            // IF KEY FOUND, THEN OPTIONS ARE IN AN OPTGROUP
            if (KEY.key in optsList[i]) {
                if (KEY.options in optsList[i]) {
                    var optGroupList = optsList[i][KEY.options];
                    html += "<optgroup " + GetAttr('label', optsList[i][KEY.key]) + ">";
                    for (var j = 0; j < optGroupList.length; j++) { html += GetSelectOptionHtml(optGroupList[j], fieldValue); }
                    html += "</optgroup>";
                }
            
            } else { html += GetSelectOptionHtml(optsList[i], fieldValue); }
        }
        return html;
    }
    
    // SELECT OPTION HTML
    function GetSelectOptionHtml(optDict, fieldValue) {
        var html = "";
        try {
            // MODS (CURRENTLY LIMITED TO addclass, adddataattributes, AND disabled)
            var modsDict = {};
            if (KEY.mods in optDict) { modsDict = GetModsDict(optDict[KEY.mods]); }
            
            var optAttrs = [];
            optAttrs.push(GetAttr('value', optDict[KEY.value]));
            if (KEY.disabled in optDict && (optDict[KEY.disabled] === "true")) { optAttrs.push(ATTR.Disabled); }
            if (optDict[KEY.value] === fieldValue) { optAttrs.push(ATTR.Selected); }
            if ((MOD.AddClass in modsDict) && (KEY.param in modsDict[MOD.AddClass])) { optAttrs.push(GetAttr('class', modsDict[MOD.AddClass][KEY.param])); }
            if ((MOD.AddDataAttrs in modsDict) && (KEY.params in modsDict[MOD.AddDataAttrs])) { optAttrs = optAttrs.concat(GetDataAttributsFromParams(modsDict[MOD.AddDataAttrs][KEY.params])); }
            
            // HTML
            html += "<option " + optAttrs.join(' ') + ">" + optDict[KEY.label] + "</option>";
            
        } catch (e) { if (window.console) { console.log("JFS Error: Error parsing select option modifiers.", optDict, e); } }

        return html;
    }
    
    // AUGMENT BUTTONS HTML
    function GetBtnsHtml(formKeys, modsDict, allow, pack) {
        var btnsHtml = { above: "", right: "", below: "", left: "" };
        if (allow && (MOD.AugmentBtns in modsDict)) {
            try {
                var btnsList = modsDict[MOD.AugmentBtns][KEY.field_btns];
                for (var i = 0; i < btnsList.length; i++) {
                    var dict = GetParamsDict(btnsList[i][KEY.params]);
                    var btnPos = (MOD.ButtonPosition in dict ? dict[MOD.ButtonPosition] : pack.FieldButtonPosition);
                    var label = (MOD.ButtonText in dict ? dict[MOD.ButtonText] : "");
                    var title = (MOD.ButtonTitle in dict ? dict[MOD.ButtonTitle] : "");
                    var iconLabelPos = (MOD.ButtonIconLabelPosition in dict ? dict[MOD.ButtonIconLabelPosition] : pack.IconLabelPosition);
                    var funct = (MOD.ButtonFunction in dict ? dict[MOD.ButtonFunction] : "");
                    
                    var classes = [ CLS.AugmentBtn, CLS.AugmentBtn + "_" + btnPos ];
                    
                    if (title === "") {
                        if (label !== "") { title = label; }
                        else { title = "Button"; }
                    }
                    
                    var inner = "";
                    var iconHtml = "";
                    if (label !== "") { classes.push(CLS.AugmentBtn + "_label_" + iconLabelPos); }
                    if ("btn_icon" in dict) {
                        iconHtml = "<img src='" + dict.btn_icon + "' " + GetAttr('alt', "Icon: " + title) + "/>";
                        classes.push(CLS.AugmentBtn + "_icon");
                    }
                    if (iconLabelPos === "left") { inner = label + iconHtml; }
                    else { inner = iconHtml + label; }
                    
                    var attrs = [];
                    attrs.push(GetAttr('type', 'button'));
                    attrs.push(GetAttr('class', classes.join(' ')));
                    attrs.push(GetAttr('title', title));
                    attrs.push(GetDAttr(ATTR.DATA_BtnFunct, funct));
                    attrs.push(GetDAttr(ATTR.DATA_FormKeys, formKeys));
                    
                    btnsHtml[btnPos] += "<button " + attrs.join(' ') + ">" + inner + "</button>";
                }

            } catch (e) { if (window.console) { console.log("JFS Error: Error parsing augment buttons modifiers.", modsDict, e); } }
        }
        return btnsHtml;
    }
    
    // FIELD WIDTH WRAP
    function WrapWithWidthSpan(html) {
        return "<span class=\"" + CLS.FieldWrap + "\">" + html + "</span>";
    }
    
// HELPER FUNCTIONS //////////////////////////////////////////////////////////////////////
    // WAIT UNTIL DEPENDENCIES ARE FULLY LOADED
    function InitWait(fields,  pack) {
        if (!libsLoaded) { var t = setTimeout(function() { InitWait(fields, pack); }, LIB_LOADING_DELAY); }
        else { JFS.Init(fields, pack); }
    }
    
    // CONVERT FIELDS XML STRING TO FIELDS OBJECT
    function ObjectifyFormXml(xmlString) {
        var dict = {};
        var $xml = jQuery(jQuery.parseXML(xmlString)).find(XML_KEY.root);
        $xml.children().each(function(nInd,nVal) {
            var $node = jQuery(nVal);
            dict[KEY[nVal.nodeName]] = ObjectifyItemsXml($node);
        });
        return dict;
    }
    
    // CONVERT VALUES XML STRING TO VALUES OBJECT
    function ObjectifyValuesXml(xmlString) {
        var valuesDict = {};
        var setsDict = {};
        var $xml = jQuery(jQuery.parseXML(xmlString)).find(XML_KEY.root + ' ' + XML_KEY.vals);
        $xml.children().each(function(setInd,setVal) {
            var $setNode = jQuery(setVal);
            setsDict[setVal.nodeName] = ObjectifyItemXml($setNode);
        });
        valuesDict[KEY[XML_KEY.vals]] = setsDict;
        return valuesDict;
    }
    
    // CONVERT XML ITEM SET TO OBJECT
    function ObjectifyItemsXml($xml) {
        var arr = [];
        $xml.children().each(function(ind,val) {
            var $node = jQuery(val);
            if (val.nodeName === KEY.item) {
                if ($node.children().length > 0) { arr.push(ObjectifyItemXml($node)); }
                else { arr.push($node.text()); }
            }
        });
        return arr;
    }
    
    // CONVERT SINGLE XML ITEM TO OBJECT
    function ObjectifyItemXml($xml) {
        var dict = {};
        $xml.children().each(function(ind,val) {
            var $node = jQuery(val);
            var key = val.nodeName;
            if (key in KEY) { key = KEY[key]; }
            if ($node.children().length > 0) { dict[key] = ObjectifyItemsXml($node); }
            else { dict[key] = $node.text(); }
        });
        return dict;
    }
    
    // IMPORT VALUES OBJECT INTO FIELD SET OBJECT
    function ImportFieldSetsValues(sets, values, formKeyOffset, pack) {
        // BUILD VALUES DICT
        var valuesDict = {};
        jQuery.each(values, function(key,val) { UpdateValuesDictFromValuesObject(key, val, valuesDict); });
        
        // IMPORT INTO FIELDS
        for (var s = 0; s < sets.length; s++) {
            var set = sets[s];
            var key = (KEY.key in set ? set[KEY.key] : "");
            UpdateFieldsFromValuesDict(key, key, formKeyOffset, set[KEY.fields], valuesDict, pack);
        }
    }
    
    // UPDATE VALUES DICT FROM VALUES OBJECT
    function UpdateValuesDictFromValuesObject(formKey, valuesObj, valuesDict) {
        if (typeof valuesObj === 'string' ) { valuesDict[formKey] = valuesObj; }
        else {
            jQuery.each(valuesObj, function(key,val) {
                var fieldKey = formKey + "/" + key;
                if (typeof val === 'string' ) { valuesDict[fieldKey] = val; }
                else {
                    valuesDict[fieldKey] = true;
                    UpdateValuesDictFromValuesObject(fieldKey, val, valuesDict);
                }
            });
        }
    }
    
    // UPDATE FIELDS FROM VALUES DICT
    function UpdateFieldsFromValuesDict(formKey, addKey, formKeyOffset, fields, valuesDict, pack) {
        for (var f = 0; f < fields.length; f++) {
            var field = fields[f];
            var newFormKey = (formKey !== "" ? formKey + "/" + field[KEY.key] : "0/" + field[KEY.key]); // IF REPEATABLE GROUP, USE STARTING INDEX OF 0 AS KEY
            
            // REPEATABLE GROUP?
            if (KEY.field_sets in field) {
                // IF AT LEAST ONE VALUE FOUND FOR THAT KEY, CREATE TEST KEYS AND PROCESS ALL MATCHES, OTHERWISE USE EMPTY SET
                if (newFormKey + "/0" in valuesDict) {
                    for (var k = 0; k < MAXIMUM_GROUP_ITEMS; k++) {
                        var testKey = newFormKey + "/" + k;
                        
                        // IF KEY FOUND, CREATE A FIELD SET FROM GROUP ADDS
                        if (testKey in valuesDict) {
                            var newAddKey = formKeyOffset + addKey + "/" + field[KEY.key];
                            field[KEY.field_sets][k] = CloneObject(pack.RepeatableGroups.Adds[newAddKey]);
                            field[KEY.field_sets][k][KEY.key] = k + "";
                            UpdateFieldsFromValuesDict(testKey, newAddKey, formKeyOffset, field[KEY.field_sets][k][KEY.fields], valuesDict, pack);
                        }
                    }
                
                } else { field[KEY.field_sets] = []; }
            
            } else if (newFormKey in valuesDict) { field[KEY.field_value] = valuesDict[newFormKey]; }
        }
    }
    
    // GET VALUES OBJECT FROM FIELDS OBJECT
    function GetValues(fields) {
        var values = {};
        var valuesDict = {};
        var sets = fields[KEY.field_sets];
        for (var a = 0; a < sets.length; a++) {
            var set = sets[a];
            if (KEY.fields in set) {
                var setFields = set[KEY.fields];
                for (var b = 0; b < setFields.length; b++) {
                    if (KEY.key in setFields[b]) {
                        var fieldKey = setFields[b][KEY.key];
                        if (KEY.field_value in setFields[b]) { valuesDict[fieldKey] = setFields[b][KEY.field_value]; }
                        else { valuesDict[fieldKey] = ""; }
                    }
                }
            }
        }
        values[KEY.values] = valuesDict;
        return values;
    }
    
    // FIELD ID
    function GetFieldId(keys, pack) {
        return pack.ContainerId + "_" + keys.join('_');
    }
    
    // STANDARD ATTR
    function GetAttr(key, val) {
        return key + "=\"" + AttrSafe(val) + "\"";
    }
    
    // DATA ATTR
    function GetDAttr(key, obj) {
        var string = (typeof obj === 'string' ? obj : JSON.stringify(obj));
        return "data-" + key + "='" + string + "'";
    }
    
    // HTML SAFE
    function HtmlSafe(str) {
        return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    
    // ATTRIBUTE SAFE
    function AttrSafe(str) {
        return String(str).replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r\n/g, '&#13;').replace(/[\r\n]/g, '&#13;');
    }
    
    // CONVERT MODIFIERS ARRAY INTO MODIFIERS DICTIONARY
    function GetModsDict(list) {
        var dict = {};
        for (var i = 0; i < list.length; i++) { dict[list[i][KEY.key]] = list[i]; }
        return dict;
    }
    
    // MERGE TWO MODIFIERS DICTIONARIES
    function MergeMods(mods1, mods2) {
        var mods1Dict = GetModsDict(mods1);
        for (var m = 0; m < mods2.length; m++) {
            if (KEY.key in mods2[m]) {
                var key = mods2[m][KEY.key];
                
                // IF MODIFIER ALREADY EXISTS ON FIELD, MERGE OR REPLACE, OTHERWISE ADD
                if (key in mods1Dict) {
                    // FOR ADDCLASS, APPEND THE NEW CLASSES, OTHERWISE JUST OVERWRITE THE MOD
                    var newModParam = mods2[m][KEY.param];
                    if (key === MOD.AddClass) { newModParam = ((mods1Dict[key][KEY.param].split(' ')).concat(newModParam.split(' '))).join(' '); }
                    
                    for (var a = 0; a < mods1.length; a++) {
                        if (mods1[a][KEY.key] === key) { mods1[a][KEY.param] = newModParam; }
                    }
                    
                } else { mods1.push(mods2[m]); }
            }
        }
        return mods1;
    }
    
    // PARSE PARAMS
    function GetParamsDict(list) {
        var dict = {};
        for (var i = 0; i < list.length; i++) {
            var param = (KEY.param in list[i] ? list[i][KEY.param] : "");
            dict[list[i][KEY.key]] = param;
        }
        return dict;
    }
    
    // GET DATA ATTRIBUTES FROM PARAMS LIST
    function GetDataAttributsFromParams(list) {
        var attrs = [];
        for (var i = 0; i < list.length; i++) {
            var param = (KEY.param in list[i] ? list[i][KEY.param] : "");
            attrs.push(GetDAttr(list[i][KEY.key], param));
        }
        return attrs;
    }
    
    // ALLOW ONLY VALID CHARACTERS IN STRING
    function AllowChars(orig, chars, replaceSpaces) {
        orig += ""; // MAKE SURE INPUT IS A STRING
        var clean = "";
        if (replaceSpaces) { orig = orig.replace(/ /g, "_"); } // REPLACE SPACES WITH UNDERSCORES
        for (var i = 0; i < orig.length; i++) { if (chars.toString().indexOf(orig.charAt(i)) !== -1) { clean += orig.charAt(i); } }
        return clean;
    }
    
    // PREVENT INVALID CHARACTERS IN STRING
    function PreventChars(orig, chars, replaceSpaces) {
        orig += ""; // MAKE SURE INPUT IS A STRING
        var clean = "";
        if (replaceSpaces) { orig = orig.replace(/ /g, "_"); } // REPLACE SPACES WITH UNDERSCORES
        for (var i = 0; i < orig.length; i++) { if (chars.toString().indexOf(orig.charAt(i)) === -1) { clean += orig.charAt(i); } }
        return clean;
    }
    
    // UPDATE CHAR COUNT
    function UpdateCharCount(field) {
        var countSpan = field.parent().parent().find('span.' + CLS.CharCounterText).eq(0);
        var count = field.val().length;
        countSpan.text(count + " character" + (count === 1 ? "" : "s"));
    }
    
    // UPDATE WORD COUNT
    function UpdateWordCount(field) {
        var countSpan = field.parent().parent().find('span.' + CLS.WordCounterText).eq(0);
        var words = field.val().match(/\S+/g);
        var count = words && words.length || 0;
        countSpan.text(count + " word" + (count === 1 ? "" : "s"));
    }
    
    // CONVERT TWO ARRAYS TO BASIC OPTIONS OBJECT
    function ArraysToBasicOptionObj(labels, values, emptyLabel, useEmpty) {
        var obj = [];
        if (useEmpty && (emptyLabel !== "")) { obj.push({ l: emptyLabel, v: "" }); }
        for (var i = 0; i < labels.length; i++) { obj.push({ l: labels[i], v: values[i] }); }
        return obj;
    }

    // ZERO PAD INT
    function ZeroPadInt(number, digitCount) {
        var zeroCount = digitCount - (number + "").length + 1;
        return new Array(zeroCount).join("0") + number;
    }
    
    // CLONE JS OBJECT
    function CloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    
    
// PREDEFINED OPTIONS //////////////////////////////////////////////////////////////////
    function PreDefs(useEmpty) {
    
        var currentDate = new Date();
        var yearValues = []; for (var y = 0; y < 10; y++) { yearValues[y] = parseInt(currentDate.getUTCFullYear() + y) + ""; }
        var dayValues = []; for (var d = 0; d < 31; d++) { dayValues[d] = ZeroPadInt(d + 1, 2) + ""; }
        var hourValues = []; for (var h = 0; h < 12; h++) { hourValues[h] = ZeroPadInt(h + 1, 2) + ""; }
        var minuteValues = []; for (var m = 0; m < 60; m++) { minuteValues[m] = ZeroPadInt(m, 2) + ""; }
        var secondValues = []; for (var s = 0; s < 60; s++) { secondValues[s] = ZeroPadInt(s, 2) + ""; }
        var nameprefixes = [ "Ms", "Miss", "Mrs", "Mr", "Dr", "Prof", "Coach", "Pres", "Atty", "Rev", "Hon" ];
        var genders = [ "Female", "Male" ];
        var maritalstatuses = [ "Single", "Married", "Separated", "Divorced", "Widowed", "Other" ];
        var monthLabels = [ "01 - January", "02 - February", "03 - March", "04 - April", "05 - May", "06 - June", "07 - July", "08 - August", "09 - September", "10 - October", "11 - November", "12 - December" ];
        var monthValues = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11" ];
        
        var usStatesLabels = [
            "AK (Alaska)","AL (Alabama)","AR (Arkansas)","AZ (Arizona)","CA (California)","CO (Colorado)","CT (Connecticut)","DC (Dist. of Columbia)","DE (Delaware)","FL (Florida)",
            "GA (Georgia)","HI (Hawaii)","IA (Iowa)","ID (Idaho)","IL (Illinois)","IN (Indiana)","KS (Kansas)","KY (Kentucky)","LA (Louisiana)",
            "MA (Massachusetts)","MD (Maryland)","ME (Maine)","MI (Michigan)","MN (Minnesota)","MO (Missouri)","MS (Mississippi)","MT (Montana)",
            "NC (North Carolina)","ND (North Dakota)","NE (Nebraska)","NH (New Hampshire)","NJ (New Jersey)","NM (New Mexico)","NV (Nevada)","NY (New York)",
            "OH (Ohio)","OK (Oklahoma)","OR (Oregon)","PA (Pennsylvania)","RI (Rhode Island)","SC (South Carolina)","SD (South Dakota)",
            "TN (Tennessee)","TX (Texas)", "UT (Utah)","VA (Virginia)","VT (Vermont)","WA (Washington)","WI (Wisconsin)","WV (West Virginia)","WY (Wyoming)"
        ];
        var usStatesValues = [
            "AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL",
            "GA","HI","IA","ID","IL","IN","KS","KY","LA",
            "MA","MD","ME","MI","MN","MO","MS","MT",
            "NC","ND","NE","NH","NJ","NM","NV","NY",
            "OH","OK","OR","PA","RI","SC","SD",
            "TN","TX","UT","VA","VT","WA","WI","WV","WY"
        ];
        
        var usTerrLabels = [ "AS (American Samoa)","GU (Guam)","MP (Northern Mariana Islands)","PR (Puerto Rico)","VI (Virgin Islands)","AA (Armed Forces - Americas excluding Canada)","AE (Armed Forces - Europe, Canada, Middle East, Africa)","AP (Armed Forces - Pacific)" ];
        var usTerrValues = [ "AS","GU","MP","PR","VI","AA","AE","AP" ];
        
        var canadaProvLabels = [ "AB (Alberta)","BC (British Columbia)", "MB (Manitoba)","NB (New Brunswick)","NL (Newfoundland and Labrador)","NT (Northwest Territories)","NS (Nova Scotia)","NU (Nunavut)","ON (Ontario)","PE (Prince Edward Island)","QC (Quebec)","SK (Saskatchewan)","YT (Yukon)" ];
        var canadaProvValues = [ "AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT" ];
        
        return {
            name_prefix: ArraysToBasicOptionObj(nameprefixes, nameprefixes, "Select...", useEmpty),
            gender: ArraysToBasicOptionObj(genders, genders, "Select...", useEmpty),
            marital_status: ArraysToBasicOptionObj(maritalstatuses, maritalstatuses, "Select...", useEmpty),
            current_year_plus_10: ArraysToBasicOptionObj(yearValues, yearValues, "", useEmpty),
            numeric_months_and_names: ArraysToBasicOptionObj(monthLabels, monthValues, "", useEmpty),
            numeric_days: ArraysToBasicOptionObj(dayValues, dayValues, "", useEmpty),
            hours_12: ArraysToBasicOptionObj(hourValues, hourValues, "", useEmpty),
            minutes: ArraysToBasicOptionObj(minuteValues, minuteValues, "", useEmpty),
            seconds: ArraysToBasicOptionObj(secondValues, secondValues, "", useEmpty),
            link_targets: ArraysToBasicOptionObj([ "Current Window", "New Window" ], [ "_self", "_blank" ], "", useEmpty),
            yes_no: ArraysToBasicOptionObj([ "Yes", "No" ], [ "yes", "no" ], "", useEmpty),
            no_yes: ArraysToBasicOptionObj([ "No", "Yes" ], [ "no", "yes" ], "", useEmpty),
            
            us_states: ArraysToBasicOptionObj(usStatesLabels, usStatesValues, "Select a State...", useEmpty),
            us_territories: ArraysToBasicOptionObj(usTerrLabels, usTerrValues, "Select a Territory...", useEmpty),
            canada_provinces: ArraysToBasicOptionObj(canadaProvLabels, canadaProvValues, "Select a State...", useEmpty),
            us_states_and_territories_and_canada:
                ArraysToBasicOptionObj(["Outside U.S./Canada"], ["OUTSIDE"], "Select a State...", useEmpty)
                .concat({ k: "US", os: ArraysToBasicOptionObj(usStatesLabels, usStatesValues, "").concat(ArraysToBasicOptionObj(usTerrLabels, usTerrValues, "", useEmpty)) })
                .concat({ k: "Canada", os: ArraysToBasicOptionObj(canadaProvLabels, canadaProvValues, "", useEmpty) })
        }
    }
    
    
    window.JFS = JFS;
    
})(window);





