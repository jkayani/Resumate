﻿'------------------------------------------------------------------------------
' <auto-generated>
'     This code was generated by a tool.
'     Runtime Version:4.0.30319.34014
'
'     Changes to this file may cause incorrect behavior and will be lost if
'     the code is regenerated.
' </auto-generated>
'------------------------------------------------------------------------------

Option Strict On
Option Explicit On

Imports System

Namespace My.Resources
    
    'This class was auto-generated by the StronglyTypedResourceBuilder
    'class via a tool like ResGen or Visual Studio.
    'To add or remove a member, edit your .ResX file then rerun ResGen
    'with the /str option, or rebuild your VS project.
    '''<summary>
    '''  A strongly-typed resource class, for looking up localized strings, etc.
    '''</summary>
    <Global.System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0"),  _
     Global.System.Diagnostics.DebuggerNonUserCodeAttribute(),  _
     Global.System.Runtime.CompilerServices.CompilerGeneratedAttribute(),  _
     Global.Microsoft.VisualBasic.HideModuleNameAttribute()>  _
    Friend Module Resources
        
        Private resourceMan As Global.System.Resources.ResourceManager
        
        Private resourceCulture As Global.System.Globalization.CultureInfo
        
        '''<summary>
        '''  Returns the cached ResourceManager instance used by this class.
        '''</summary>
        <Global.System.ComponentModel.EditorBrowsableAttribute(Global.System.ComponentModel.EditorBrowsableState.Advanced)>  _
        Friend ReadOnly Property ResourceManager() As Global.System.Resources.ResourceManager
            Get
                If Object.ReferenceEquals(resourceMan, Nothing) Then
                    Dim temp As Global.System.Resources.ResourceManager = New Global.System.Resources.ResourceManager("EzRes.Resources", GetType(Resources).Assembly)
                    resourceMan = temp
                End If
                Return resourceMan
            End Get
        End Property
        
        '''<summary>
        '''  Overrides the current thread's CurrentUICulture property for all
        '''  resource lookups using this strongly typed resource class.
        '''</summary>
        <Global.System.ComponentModel.EditorBrowsableAttribute(Global.System.ComponentModel.EditorBrowsableState.Advanced)>  _
        Friend Property Culture() As Global.System.Globalization.CultureInfo
            Get
                Return resourceCulture
            End Get
            Set
                resourceCulture = value
            End Set
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to var Resume = {
        '''
        '''	contactInfo: {
        '''		name: &quot;&quot;,
        '''		contactEmail: &quot;&quot;,
        '''		contactPhone: &quot;&quot;,
        '''		websiteURL: &quot;&quot;,
        '''		street: &quot;&quot;,
        '''		city: &quot;&quot;,
        '''		state: &quot;&quot;,
        '''		zip: &quot;&quot;
        '''	},
        '''
        '''	objective: &quot;&quot;,
        '''
        '''	education:[
        '''			{
        '''				name: &quot;&quot;,
        '''				startDate: &quot;&quot;,
        '''				endDate: &quot;&quot;,
        '''				location: &quot;&quot;,
        '''				degree: &quot;&quot;
        '''			}
        '''	],
        '''
        '''	workExperience:[
        '''			{
        '''				name: &quot;&quot;,
        '''				startDate: &quot;&quot;,
        '''				endDate: &quot;&quot;,
        '''				role: &quot;&quot;,
        '''				location: &quot;&quot;
        '''			}
        '''	],
        '''
        '''	volunteerExperience:[
        '''			{
        '''				name: &quot;&quot;,
        '''				startDate: &quot;&quot;,
        '''				endDate: &quot; [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property _resume() As String
            Get
                Return ResourceManager.GetString("_resume", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to var App = {
        '''
        '''	/**
        '''	* Clears all input fields of any default values
        '''	*/
        '''	clear: function(){
        '''		if(confirm(&quot;Reset Resume?&quot;)){ 
        '''
        '''			// Clear the inputs
        '''			$(&quot;.moduleInput&quot;).each(function(){
        '''				$(this).val(&quot;&quot;);
        '''			});
        '''
        '''			// Reset Resume
        '''			Resume = {
        '''				contactInfo: {
        '''					name: &quot;&quot;,
        '''					contactEmail: &quot;&quot;,
        '''					contactPhone: &quot;&quot;,
        '''					websiteURL: &quot;&quot;,
        '''					street: &quot;&quot;,
        '''					city: &quot;&quot;,
        '''					state: &quot;&quot;,
        '''					zip: &quot;&quot;
        '''				},
        '''
        '''				objective: &quot;&quot;,
        '''
        '''				education:[
        '''						{
        '''							name: &quot;&quot;,
        '''		 [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property app() As String
            Get
                Return ResourceManager.GetString("app", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to &lt;!DOCTYPE html&gt;
        '''&lt;html&gt;
        '''&lt;head&gt;
        '''	&lt;title&gt;Resumate&lt;/title&gt;
        '''	&lt;script src=&quot;jquery.js&quot;&gt;&lt;/script&gt;
        '''	&lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;
        '''	&lt;script src=&quot;render.js&quot;&gt;&lt;/script&gt;
        '''	&lt;script src=&quot;resume.js&quot;&gt;&lt;/script&gt;
        '''	&lt;script src=&quot;ui.js&quot;&gt;&lt;/script&gt;
        '''	&lt;script src=&quot;web.js&quot;&gt;&lt;/script&gt;
        '''	&lt;script&gt;
        '''	&lt;/script&gt;
        '''	&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;reset.css&quot;&gt;
        '''	&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;stylesheet.css&quot;&gt;
        '''&lt;/head&gt;
        '''&lt;body&gt;
        '''	&lt;div class=&quot;tabs&quot;&gt;
        '''	    &lt;ul class=&quot;tab-links&quot;&gt;
        '''	        &lt;li class=&quot;active&quot;&gt;&lt;a hre [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property indexBeta() As String
            Get
                Return ResourceManager.GetString("indexBeta", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to /*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
        '''//@ sourceMappingURL=jquery-1.10.2.min.map
        '''*/
        '''(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f=&quot;1.10.2&quot;,d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]*))$/,k=/^ [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property jquery() As String
            Get
                Return ResourceManager.GetString("jquery", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to /*! jQuery UI - v1.11.4 - 2015-03-22
        '''* http://jqueryui.com
        '''* Includes: core.css, draggable.css, resizable.css, selectable.css, sortable.css, accordion.css, autocomplete.css, button.css, datepicker.css, dialog.css, menu.css, progressbar.css, selectmenu.css, slider.css, spinner.css, tabs.css, tooltip.css, theme.css
        '''* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Trebuchet%20MS%2CTahoma%2CVerdana%2CArial%2Csans-serif&amp;fwDefault=bold&amp;fsDefault=1.1em&amp;cornerRadius=4px&amp;bgColorHeade [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property jquery_ui() As String
            Get
                Return ResourceManager.GetString("jquery_ui", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to var Render = {
        '''
        '''	/**
        '''	* Clears the current Resume view
        '''	*/
        '''	clear: function(){
        '''		$(&quot;.resumeView&quot;).html(&quot;&quot;);
        '''	},
        '''
        '''	/**
        '''	* Attaches a click event to each entry added to the resume. The click event allows entries to be deleted from the Resume object,
        '''	* and then re-renders the Resume.
        '''	*/
        '''	attachDelete: function(){
        '''		var notFound = true;
        '''
        '''		$(&quot;.resumeView div &gt; div[class*=&apos;container&apos;]&quot;).each(function(){
        '''
        '''			// Append the delete icon to each entry
        '''			$(this).append(
        '''				&quot;&lt;img class=&apos;delete&apos;  [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property render() As String
            Get
                Return ResourceManager.GetString("render", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to /* http://meyerweb.com/eric/tools/css/reset/ 
        '''   v2.0 | 20110126
        '''   License: none (public domain)
        '''*/
        '''
        '''html, body, div, span, applet, object, iframe,
        '''h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        '''a, abbr, acronym, address, big, cite, code,
        '''del, dfn, em, img, ins, kbd, q, s, samp,
        '''small, strike, strong, sub, sup, tt, var,
        '''b, u, i, center,
        '''dl, dt, dd, ol, ul, li,
        '''fieldset, form, label, legend,
        '''table, caption, tbody, tfoot, thead, tr, th, td,
        '''article, aside, canvas, details, embed, 
        '''figure, figcapt [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property reset() As String
            Get
                Return ResourceManager.GetString("reset", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to body{
        '''    font-family: sans-serif;
        '''    padding-bottom: 50px;
        '''}
        '''.submitButton {
        '''    position: fixed;
        '''    bottom: 0;
        '''	right: 50%;
        '''}
        '''
        '''.dates {
        '''    text-align: right;
        '''    float: right;
        '''}
        '''
        '''#options {
        '''    position:absolute;
        '''    left: 0;
        '''    background: white;
        '''    height: 100%;
        '''    width: 50%;
        '''    display: none;
        '''    border: solid 1px lightgray;
        '''}
        '''
        '''#help {
        '''    position:absolute;
        '''    left: 0;
        '''    background: white;
        '''    height: 100%;
        '''    width: 50%;
        '''    border: solid 1px lightgray;
        '''    [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property stylesheet() As String
            Get
                Return ResourceManager.GetString("stylesheet", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized resource of type System.Drawing.Bitmap.
        '''</summary>
        Friend ReadOnly Property trash() As System.Drawing.Bitmap
            Get
                Dim obj As Object = ResourceManager.GetObject("trash", resourceCulture)
                Return CType(obj,System.Drawing.Bitmap)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to jQuery(document).ready(function() {
        '''    jQuery(&apos;.tabs .tab-links a&apos;).on(&apos;click&apos;, function(e)  {
        '''        var currentAttrValue = jQuery(this).attr(&apos;href&apos;);
        ''' 
        '''        // Show/Hide Tabs
        '''        jQuery(&apos;.tabs &apos; + currentAttrValue).show().siblings().hide();
        ''' 
        '''        // Change/remove current tab to active
        '''        jQuery(this).parent(&apos;li&apos;).addClass(&apos;active&apos;).siblings().removeClass(&apos;active&apos;);
        ''' 
        '''        e.preventDefault();
        '''    });
        '''
        '''    // Checks all the checkboxes for the Resume fields 
        '''    $(&quot;input.en [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property ui() As String
            Get
                Return ResourceManager.GetString("ui", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Looks up a localized string similar to var Web = {
        '''
        '''	searchURL: {
        '''		DigitalGov: &quot;https://api.usa.gov/jobs/search.json&quot;,
        '''		AuthenticJobs: &quot;http://www.authenticjobs.com/api/&quot;,
        '''	}, 
        '''
        '''	searchPublicSector: function(query, append){
        '''		$.ajax({
        '''			url: Web.searchURL[&quot;DigitalGov&quot;],
        '''			data: {
        '''				query: encodeURI(query)
        '''			},
        '''			dataType: &quot;jsonp&quot;,
        '''			success: function(data){
        '''				Render.renderWebResults(
        '''					Web.parse(data),
        '''					append
        '''				);
        '''			},
        '''			error: function(errorThrown){
        '''				alert(&quot;Search is broken \n&quot; + errorThrown);
        '''			 [rest of string was truncated]&quot;;.
        '''</summary>
        Friend ReadOnly Property web() As String
            Get
                Return ResourceManager.GetString("web", resourceCulture)
            End Get
        End Property
    End Module
End Namespace
