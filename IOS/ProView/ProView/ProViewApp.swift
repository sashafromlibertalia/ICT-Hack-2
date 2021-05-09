//
//  ProViewApp.swift
//  ProView
//
//  Created by Patrik Duksin on 2021-05-09.
//

import SwiftUI

@main
struct ProViewApp: App {
    @StateObject var viewRouter = ViewRouter()
    var body: some Scene {
        WindowGroup {
            MotherView().environmentObject(viewRouter)
        }
    }
}
