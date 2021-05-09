//
//  TabBar.swift
//  ProView
//
//  Created by Patrik Duksin on 2021-05-09.
//
import SwiftUI

struct TabBar: View {
    
    private enum Tab: Hashable {
        case general
        case myTeam
        case deadline
        case profile
    }
    
    @State private var selectedTab: Tab = .general
    
    var body: some View {
        TabView(selection: $selectedTab) {
            generalPage()
                .tag(0)
                .tabItem {
                    Text("General")
                    Image(systemName: "house")
                }
            myTeamPage()
                .tag(1)
                .tabItem {
                    Text("My teams")
                    Image(systemName: "heart")
                }
            deadlinePage()
                .tag(2)
                .tabItem {
                    Text("Deadlines")
                    Image(systemName: "clock")
                }
            profilePage()
                .tag(3)
                .tabItem {
                    Text("Profile")
                    Image(systemName: "person")
                }
        }
    }
}
