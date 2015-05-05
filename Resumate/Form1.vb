Public Class EzRes

    Private Sub Awesomium_Windows_Forms_WebControl_ShowCreatedWebView(sender As Object, e As Awesomium.Core.ShowCreatedWebViewEventArgs) Handles WebControl1.ShowCreatedWebView
    End Sub

    Private Sub EzRes_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        WebControl1.Source = New Uri(IO.Path.Combine(My.Application.Info.DirectoryPath, "indexBeta.html"))
    End Sub
End Class
