import SwiftUI

struct MotherView: View {
    @EnvironmentObject var viewRouter: ViewRouter
    var body: some View {
        switch viewRouter.currentPage {
        case .loginPage:
            loginPage()
        case .generalPage:
            generalPage()
                .transition(.scale)
        case .myTeamPage:
            myTeamPage()
        case .deadlinePage:
            deadlinePage()
        case .profilePage:
            profilePage()
        }
    }
}

struct MotherView_Previews: PreviewProvider {
    static var previews: some View {
        MotherView().environmentObject(ViewRouter())
    }
}
