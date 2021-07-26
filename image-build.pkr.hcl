packer {
  required_plugins {
    docker = {
      version = ">= 0.0.7"
      source  = "github.com/hashicorp/docker"
    }
    digitalocean = {
      version = ">= 1.0.0"
      source  = "github.com/hashicorp/digitalocean"
    }
  }
}

# set global variables
variable "ansible_host" {
  default = "default"
}

# set docker variables
variable "ansible_docker_connection" {
  default = "docker"
}

# set digitalocean variables
variable "digitalocean_api_token" {
  default = env("DIGITALOCEAN_API_TOKEN")
}

# set docker source
source "docker" "default" {
  image       = "ubuntu:20.04"
  commit      = true
  changes     = [
    "EXPOSE 80 443",
    "CMD [\"nginx\", \"-g\", \"daemon off;\"]"
  ]
  run_command = [
    "-d",
    "-i",
    "-t",
    "--name",
    var.ansible_host,
    "{{.Image}}",
    "/bin/bash"
  ]
}

# set digitalocean source
source "digitalocean" "default" {
  api_token     = var.digitalocean_api_token
  snapshot_name = "default-image"
  image         = "ubuntu-20-04-x64"
  region        = "ams3"
  size          = "s-1vcpu-1gb"
  ssh_username  = "root"
}

# set docker build
build {
  name = "docker"
  sources = [
    "source.docker.default"
  ]
  provisioner "ansible" {
    user            = "root"
    playbook_file   = "config/ansible/playbook.yml"
    extra_arguments = [
      "--extra-vars",
      "ansible_host=${var.ansible_host} ansible_connection=${var.ansible_docker_connection}"
    ]
  }
}

# set digitalocean build
build {
  name    = "digitalocean"
  sources = [
    "source.digitalocean.default"
  ]
  provisioner "ansible" {
    user = "root"
    playbook_file = "config/ansible/playbook.yml"
  }
}
