JFS — Changelog
=============

v1.4.6 - 2022/11/11
---------------
1. Changed: Switch to using HTML5 fields by default for date, datetime, datetime-local and number types.
    * This is a breaking change if code depends on certain jQuery UI date/time picker settings.
    * To retain previous functionality, prefix field types with "old-browser-". Ex: old-browser-datetime
    * jQuery UI and Timepicker Add-on are now only needed if using old browser date/time fields.
2. Replace AutoCompleteTrigger inline styles with classes to support stricter CSPs.
3. Added: Minified CSS file.
4. Added: This Changelog file.

v1.4.5 - 2022/01/04
---------------
1. Added: New AddClass modifiers
    * addclasstopair
    * addclasstolabelcont
    * addclasstolabel
    * addclasstofieldcont
    * addclasstofield

v1.4.4 - 2020/05/29
---------------
1. Added: Ability to get script location by id for situations where async or dynamically loaded JS scripts are causing problems.
2. Misc. code cleanup