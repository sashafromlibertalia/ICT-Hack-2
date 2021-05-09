//
//  ViewRouter.swift
//  ProView
//
//  Created by Patrik Duksin on 2021-05-09.
//

import SwiftUI

class ViewRouter: ObservableObject {
    @Published var currentPage: Page = .loginPage
}
