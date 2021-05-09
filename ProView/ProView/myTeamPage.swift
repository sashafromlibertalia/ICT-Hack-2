//
//  myTeamPage.swift
//  ProView
//
//  Created by Patrik Duksin on 2021-05-09.
//

import SwiftUI

struct myTeamPage: View {
    @EnvironmentObject var viewRouter: ViewRouter
    var body: some View {
        GeometryReader { geometry in
            VStack {
                Spacer()
                Text("my team")
                Spacer()
                bar(width: geometry.size.width, height: geometry.size.height, viewRouter: viewRouter)
            }
            .edgesIgnoringSafeArea(.bottom)
        }
        .padding(.horizontal, -4)
    }
}

struct myTeamPage_Previews: PreviewProvider {
    static var previews: some View {
        myTeamPage().environmentObject(ViewRouter())
    }
}
