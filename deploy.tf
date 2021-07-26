terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

# set digitalocean variables
variable "token" {}

variable "domain" {}

# initialize provider
provider "digitalocean" {
  token = var.token
}

# get image snapshot informations 
data "digitalocean_image" "default" {
  name = "default-image"
}

# check ssh key
data "digitalocean_ssh_key" "default" {
  name = "default-key"
}

# create droplet using image snapshot
resource "digitalocean_droplet" "default" {
  image    = data.digitalocean_image.default.id
  name     = "default-droplet"
  region   = "ams3"
  size     = "s-1vcpu-1gb"
  ssh_keys = [data.digitalocean_ssh_key.default.id]
}

# create domain linked to droplet
resource "digitalocean_domain" "default" {
  name       = var.domain
  ip_address = digitalocean_droplet.default.ipv4_address
}