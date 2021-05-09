import SwiftUI

struct MotherView: View {
    @EnvironmentObject var viewRouter: ViewRouter
    var body: some View {
        switch viewRouter.currentPage {
        case .loginPage:
            loginPage()
        case .generalPage:
            TabBar()
                .transition(.scale)
        }
    }
}

struct MotherView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            MotherView().environmentObject(ViewRouter())
        }
    }
}
