
import SwiftUI

struct profilePage: View {
    @EnvironmentObject var viewRouter: ViewRouter
    var body: some View {
        GeometryReader { geometry in
            VStack {
                Spacer()
                Text("profile")
                Spacer()
                bar(width: geometry.size.width, height: geometry.size.height, viewRouter: viewRouter)
            }
            .edgesIgnoringSafeArea(.bottom)
        }
        .padding(.horizontal, -4)
    }
}

struct profilePage_Previews: PreviewProvider {
    static var previews: some View {
        profilePage().environmentObject(ViewRouter())
    }
}
