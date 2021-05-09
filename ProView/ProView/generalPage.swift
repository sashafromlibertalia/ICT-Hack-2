//
//  generalPage.swift
//  ProView
//
//  Created by Patrik Duksin on 2021-05-09.
//

import SwiftUI

struct generalPage: View {
    @EnvironmentObject var viewRouter: ViewRouter
    var body: some View {
        GeometryReader { geometry in
            VStack {
                Spacer()
                Text("general")
                Spacer()
                bar(width: geometry.size.width, height: geometry.size.height, viewRouter: viewRouter)
            }
            .edgesIgnoringSafeArea(.bottom)
        }
        .padding(.horizontal, -4)
    }
}

struct generalPage_Previews: PreviewProvider {
    static var previews: some View {
        generalPage().environmentObject(ViewRouter())
    }
}

struct tabBarIcon: View {
    @StateObject var viewRouter: ViewRouter
    let assignedPage: Page
    let width, height: CGFloat
    let systemIconName, tabName: String
    var body: some View {
        VStack {
            Image(systemName: systemIconName)
                .resizable()
                .aspectRatio(contentMode: .fit)
                //Since we have five icons, we want everyone to be one-fifth of the ContentView's width
                .frame(width: width, height: height)
                .padding(.top, 10)
            Text(tabName)
                .font(.footnote)
            Spacer()
        }
        .foregroundColor(viewRouter.currentPage == assignedPage ? .blue : .gray)
        .onTapGesture {
                viewRouter.currentPage = assignedPage
        }
    }
}

struct bar: View {
    let width, height: CGFloat
    @StateObject var viewRouter: ViewRouter
    var body: some View {
        HStack {
            tabBarIcon(viewRouter: viewRouter, assignedPage: .generalPage, width: width/4, height: height/28, systemIconName: "homekit", tabName: "Home")
            tabBarIcon(viewRouter: viewRouter, assignedPage: .myTeamPage, width: width/4, height: height/28, systemIconName: "heart", tabName: "My team")
            tabBarIcon(viewRouter: viewRouter, assignedPage: .deadlinePage, width: width/4, height: height/28, systemIconName: "clock", tabName: "Deadline")
            tabBarIcon(viewRouter: viewRouter, assignedPage: .profilePage, width: width/4, height: height/28, systemIconName: "person.crop.circle", tabName: "Profile")
        }
        .frame(width: width, height: height / 8)
        .background(lightGreyColor.shadow(radius: 2))
    }
}
